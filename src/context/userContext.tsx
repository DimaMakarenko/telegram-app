import React, { useState, useCallback, createContext } from 'react';
// types
import { User } from 'entities/user';

export type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
};

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [user, setUserState] = useState<User | null>(null);

  const setUser = useCallback((value: User) => setUserState(value), []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
