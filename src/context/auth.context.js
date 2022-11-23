import { createContext, useState, useEffect } from "react";
import api from "../../src/api/project.api";
import { storeToken, removeToken, getToken } from "../utils/token.utils";
import { useNavigate } from "react-router-dom"; 

const AuthContext = createContext();

const AuthProviderWrapper = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState('');
  const [ong, setOng] = useState('');
  const navigate = useNavigate();

  const authenticateUser = async () => {
  const storedToken = getToken();
    try {
      if (!storedToken) {
        setIsLoggedIn(false);
        throw new Error();
      }
      const response = await Promise.any([api.verify(storedToken), api.verifyOng(storedToken)])
      
      console.log(response.type)
      setUser(response.type);
      setOng(response.type);
      console.log(user)
      console.log(ong)
      setIsLoggedIn(true);

    } catch (error) {
      setIsLoggedIn(false);
      console.log(error)
      setUser(null);
      setOng(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  const logoutUser = () => {
    removeToken();
    authenticateUser();
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        ong,
        storeToken,
        authenticateUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProviderWrapper };
