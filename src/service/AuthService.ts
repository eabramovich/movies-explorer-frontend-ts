import userApiClient from "../api/userApiClient";
import { AxiosResponse } from "axios";

interface LoginResponse {
  token: string;
}

interface RegisterResponse {
  name: string;
  email: string;
  password: string;
}

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<LoginResponse>> {
    return userApiClient.post<LoginResponse>('signin', {email, password})
  }

  static async register(name: string, email: string, password: string) {
    return userApiClient.post<RegisterResponse>('signup', {name, email, password});
  }

}