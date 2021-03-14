import { UserData } from './UserData';

export const getMe = async (): Promise<UserData | null> => {
  const url = process.env.REACT_APP_API_URL + '/users/me';

  const response = await fetch(url);

  if (response.status === 401) {
    return null;
  }

  return response.json();
};
