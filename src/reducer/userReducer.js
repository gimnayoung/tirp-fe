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
        return {...state,loading:false}
    case types.LOGIN_SUCCESS:
    case types.LOGIN_TOKEN_SUCCESS:
      return {...state,loading:false,user:payload.user}
    case types.SIGNUP_USER_FAIL:
    case types.LOGIN_FAIL:
        return {...state,loading:false,error:payload}
    case type.LOGIN_TOKEN_FAIL:
        return {...state,loading:false}
    case type.LOGOUT:
        return{...state,user:null}
    default:
      return state; 
  }
}

export default userReducer;