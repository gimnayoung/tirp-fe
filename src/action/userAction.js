import * as types from "../constants/user.constants";
import api from "../utils/api";

const sginUpUser = ({ email, name, password }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: types.SGINUP_USER_REQUEST });
            const response= await api.post('/user',{email, name, password});
            if(response.status!==200) throw new Error(response.error)
            dispatch ({type: types.SGINUP_USER_SUCCESS});
            alert('회원가입에 성공했습니다.')
        } catch (error) {
            dispatch({type:types.SGINUP_USER_FAIL,payload:error.error});
        }
    };
};

export const userActions = {
    sginUpUser,
};