import React, { createContext, useMemo } from 'react'
import useLocalStorage from './UseLocalStorage';
  
export const tokenAuth = createContext({})

interface Props {
  children: React.ReactNode
}

const TokenAuthProvider = ({ children }: Props) => {
  const [currentUser, storeUser, clearStoredUser] = useLocalStorage('user')

  const handleTokenChange = (token: string, action: string) => {
      if (action === 'logout'){
          clearStoredUser();
      }
      else {
          storeUser(token);
      }
  };

  const userStatus = useMemo(
    () => ({ currentUser, handleTokenChange }),
    [currentUser, handleTokenChange],
  );

  return (
    <tokenAuth.Provider value={userStatus}>
      {children}
    </tokenAuth.Provider>
  );
};
  
export default TokenAuthProvider;