import * as types from "../constants/user.constants";

const initialState = {
  loading: false,
  user: null,
  error:""
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SIGNUP_USER_REQUEST:
    case types.LOGIN_REQUEST:
    case types.LOGIN_TOKEN_REQUES:
    case types.GOOGLE_LOGIN_REQUEST:
        return {...state,loading:false}
    case types.LOGIN_SUCCESS:
    case types.LOGIN_TOKEN_SUCCESS:
    case types.GOOGLE_LOGIN_SUCCESS:
      return {...state,loading:false,user:payload.user}
    case types.SIGNUP_USER_FAIL:
    case types.LOGIN_FAIL:
        return {...state,loading:false,error:payload}
    case types.LOGIN_TOKEN_FAIL:
        return {...state,loading:false}
    case types.LOGOUT:
        return{...state,user:null}
    default:
      return state; 
  }
}

export default userReducer;