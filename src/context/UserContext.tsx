import { createContext } from "react";

export const UserContext = createContext<null | boolean>(false);

type UserConxextProviderType = {
  children: React.ReactNode;
}

export const UserContextProvider = ({ children }: UserConxextProviderType) => {

  const isLoggedIn: boolean = false;

  return (
    <UserContext.Provider value={isLoggedIn}>
      {children}
    </UserContext.Provider>
  )
}