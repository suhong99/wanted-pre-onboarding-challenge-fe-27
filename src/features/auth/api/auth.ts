import axios from 'axios';
import { STORAGE_KEY } from '../../../shared/const/storage';
import { BASE_URL } from '../../../shared/const/url';

interface AuthResponse {
  message: string;
  token: string;
}

interface AuthParams {
  email: string;
  password: string;
}

export const login = async ({
  email,
  password,
}: AuthParams): Promise<boolean> => {
  try {
    const response = await axios.post<AuthResponse>(`${BASE_URL}/users/login`, {
      email,
      password,
    });

    alert(response.data.message);
    localStorage.setItem(STORAGE_KEY.token, response.data.token);

    return true;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Login failed:', error.response.data);
      alert(error.response.data.details);
    } else {
      console.error('An unexpected error occurred:', error);
    }
    return false;
  }
};

export const signUp = async ({
  email,
  password,
}: AuthParams): Promise<boolean> => {
  try {
    const response = await axios.post<AuthResponse>(
      `${BASE_URL}/users/create`,
      {
        email,
        password,
      }
    );

    alert(response.data.message);
    localStorage.setItem(STORAGE_KEY.token, response.data.token);

    return true;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('SignUp failed:', error.response.data);
      alert(error.response.data.details);
    } else {
      console.error('An unexpected error occurred:', error);
    }
    return false;
  }
};
