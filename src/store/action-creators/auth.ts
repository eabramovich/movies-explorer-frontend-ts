import { UserAction, UserActionTypes } from "../../types/user";
import AuthService from "../../service/AuthService";
import { Dispatch } from "redux";

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.LOGIN_REQUEST});
      const response = await AuthService.login(email, password);
      console.log(response.data.token);
      localStorage.setItem('token', response.data.token);
      dispatch({type: UserActionTypes.LOGIN_SUCCESS, payload: response.data})
    } catch (e: any) {
      console.log("Ошибка авторизации", e.message);
      dispatch({type: UserActionTypes.LOGIN_ERROR, payload: e.message})
      console.log("Ошибка авторизации");
    }
  }
}