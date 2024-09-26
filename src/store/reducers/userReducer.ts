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
    case UserActionTypes.GET_USER_INFO_REQUEST:
      return { ...state };
    case UserActionTypes.GET_USER_INFO_SUCCESS:
      return { ...state, isLoggedIn: true }
    case UserActionTypes.GET_USER_INFO_ERROR:
      return { ...state, error: action.payload}
    default:
      return state;
  }
}