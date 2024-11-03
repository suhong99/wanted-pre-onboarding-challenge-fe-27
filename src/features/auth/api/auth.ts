import axios from 'axios';
import { BASE_URL } from '../../../shared/const/auth';

interface LoginResponse {
  message: string;
  token: string;
}

interface LoginParams {
  email: string;
  password: string;
}

export const login = async ({
  email,
  password,
}: LoginParams): Promise<LoginResponse | null> => {
  try {
    const response = await axios.post<LoginResponse>(
      `${BASE_URL}/users/login`,
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Login failed:', error.response.data);
    } else {
      console.error('An unexpected error occurred:', error);
    }
    return null;
  }
};
