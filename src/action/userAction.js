import * as types from "../constants/user.constants";
import api from "../utils/api";

const signUpUser = ({ email, name, password },navigate) => {
    return async (dispatch) => {
        try {
            dispatch({ type: types.SIGNUP_USER_REQUEST });
            const response= await api.post('/user',{email, name, password});
            if(response.status!==200) throw new Error(response.error)
            dispatch ({type: types.SIGNUP_USER_SUCCESS});
            alert('회원가입에 성공했습니다.')
            navigate('/login');
        } catch (error) {
            dispatch({type:types.SIGNUP_USER_FAIL,payload:error.error});
        }
    };
};

const loginWithEmail =({email ,password})=>async (dispatch) =>{   
    try{
        dispatch({type:types.LOGIN_REQUEST});
        const response =await api.post("/auth/login",{email, password});
        if(response.status !== 200) throw new Error(response.error);
        dispatch({type:types.LOGIN_SUCCESS, payload:response.data});
        sessionStorage.setItem("token",response.data.token);
        alert('로그인에 성공했습니다.')
        }
    catch(error){
        dispatch({type:types.LOGIN_FAIL,payload:error.error});
    }
}

const loginWithToken=()=>async (dispatch) =>{   
    try{
        dispatch({type:types.LOGIN_TOKEN_REQUES});
        const response = await api.get("/user/me");
        if(response.status !== 200) throw new Error(response.error);
        dispatch({type:types.LOGIN_TOKEN_SUCCESS, payload:response.data})
    }
    catch(error){
        dispatch({type:types.LOGIN_TOKEN_FAIL});
        dispatch(logout());
    }
}

const logout=()=>async(dispatch)=> {
    dispatch({type:types.LOGOUT});
    sessionStorage.removeItem("token");
}

const loginWithGoogle=(token)=>async(dispatch)=>{
    try{
        dispatch({type:types.GOOGLE_LOGIN_REQUEST});
        const response = await api.post("/auth/google",token); //todo
        if(response.status !== 200) throw new Error(response.error);
        dispatch({type:types.GOOGLE_LOGIN_SUCCESS , payload:response.data})
    }
    catch(error){
        dispatch({type:types.GOOGLE_LOGIN_FAIL,payload:error.error});
    }
}
export const userActions = {
    signUpUser,
    loginWithEmail,
    loginWithToken,
    logout,
    loginWithGoogle
};