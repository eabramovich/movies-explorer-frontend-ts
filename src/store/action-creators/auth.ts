import { UserAction, UserActionTypes } from "../../types/user";
import AuthService from "../../service/AuthService";
import { Dispatch } from "redux";

export const loginUser = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.LOGIN_REQUEST});
      const response = await AuthService.login(email, password);
      console.log(response);
      dispatch({type: UserActionTypes.LOGIN_SUCCESS, payload: response.data})
    } catch (e) {
      console.log("Ошибка авторизации");
    }
  }
}