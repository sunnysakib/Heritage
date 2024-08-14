"use client";
// contexts/UserContext.js
import { createContext, useContext, useState } from 'react';
interface UserContextType {
  user: any;
  login: (userData: any) => void;
  logout: () => void;

}

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState<any[]>([]);
  const login = (userData:any) => {
    
    setUser(userData );
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
