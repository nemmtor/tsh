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
  const res = await fetch(process.env.REACT_APP_API_URL + '/users/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  if (res.status > 400) {
    throw new Error('Username or password incorrect.');
  }

  return res.json();
};
