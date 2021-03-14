import React, { createContext, ReactNode, useState } from 'react';

interface User {
  id: number;
  username: string;
  avatar: string;
}

interface UserContext {
  user: User | null;
  logIn: (userData: User) => void;
  logOut: () => void;
}

export const UserContext = createContext<UserContext>({
  user: null,
  logOut: () => {},
  logIn: () => {},
});

interface Props {
  children: ReactNode;
}

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const logIn = (userData: User) => {
    setUser(userData);
  };

  const logOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
