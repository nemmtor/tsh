import { UserData } from 'requests/user';

export interface Props {
  searchAction: (value: string) => void;
  setPromo: (value: boolean) => void;
  setActive: (value: boolean) => void;
  user?: UserData | null;
  userIsLoading: boolean;
}
