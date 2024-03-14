import * as types from "../constants/user.constants";

const initialState = {
  loading: false,
  user: null,
  error: ""
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case types.SGINUP_USER_REQUEST:
        return {...state,loading:true}
    case types.SGINUP_USER_FAIL:
        return {...state,loading:false,error:payload}

    default:
      return state; // 기본 케이스에서는 현재 상태를 그대로 반환합니다.
  }
}

export default userReducer;