import { UserData } from './UserData';

export interface LoginValues {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: UserData;
  expiresIn: string;
  access_token: string;
}

export const login = async (values: LoginValues): Promise<LoginResponse> => {
  const url = `${process.env.REACT_APP_API_URL}/users/login`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  if (res.status === 404 || res.status === 401) {
    throw new Error('Username or password incorrect.');
  }

  if (res.status !== 201) {
    throw new Error('Something went wrong, try again later.');
  }

  return res.json();
};
