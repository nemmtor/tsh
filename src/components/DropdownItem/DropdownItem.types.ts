import { ReactNode } from 'react';

export interface Props {
  handleClick: () => void;
  children: ReactNode;
}
