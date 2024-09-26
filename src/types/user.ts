interface User {
  _id: string
  name: string;
  email: string;
}

export interface AuthState {
  token: string | null;
  currentUser: User | {};
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

export enum UserActionTypes {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_ERROR = "LOGIN_ERROR",
  GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST",
  GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS",
  GET_USER_INFO_ERROR = "GET_USER_INFO_ERROR"
}

interface LoginRequestAction {
  type: typeof UserActionTypes.LOGIN_REQUEST
}

interface LoginSuccessAction {
  type: typeof UserActionTypes.LOGIN_SUCCESS;
  payload: {
    token: string;
  };
}

interface LoginErrorAction {
  type: typeof UserActionTypes.LOGIN_ERROR;
  payload: string;
}

interface GetUserInfoRequestAction {
  type: typeof UserActionTypes.GET_USER_INFO_REQUEST
}

interface GetUserInfoSuccessAction {
  type: typeof UserActionTypes.GET_USER_INFO_SUCCESS,
  payload: User
}

interface GetUserInfoErrorAction {
  type: typeof UserActionTypes.GET_USER_INFO_ERROR
  payload: string
}

export type UserAction =
  | GetUserInfoRequestAction
  | GetUserInfoSuccessAction
  | GetUserInfoErrorAction
  | LoginRequestAction
  | LoginSuccessAction
  | LoginErrorAction