import { UserAction, UserActionTypes, AuthState } from "../../types/user";

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  currentUser: {},
  isLoggedIn: !!localStorage.getItem('token'),
  error: null,
  loading: false,
}

export const userReducer = (state = initialState, action: UserAction): AuthState => {
  switch (action.type) {
    case UserActionTypes.LOGIN_REQUEST:
    case UserActionTypes.GET_USER_INFO_REQUEST:
      return { ...state };
    case UserActionTypes.GET_USER_INFO_SUCCESS:
      return { ...state, isLoggedIn: true }
    case UserActionTypes.GET_USER_INFO_ERROR:
    case UserActionTypes.LOGIN_ERROR:
      return { ...state, error: action.payload}
    case UserActionTypes.LOGIN_SUCCESS:
      console.log('Action payload', action.payload);
      return { ...state, token: action.payload.token, isLoggedIn: true }
    default:
      return state;
  }
}