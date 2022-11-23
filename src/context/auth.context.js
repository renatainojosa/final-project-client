import { createContext, useState, useEffect } from "react";
import api from "../../src/api/project.api";
import { storeToken, removeToken, getToken } from "../utils/token.utils";
import { useNavigate } from "react-router-dom"; 

const AuthContext = createContext();

const AuthProviderWrapper = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userOrOng, setUserOrOng] = useState('');
  const navigate = useNavigate();

  const authenticateUser = async () => {
  const storedToken = getToken();
    try {
      if (!storedToken) {
        setIsLoggedIn(false);
        return;
      }
      const response = await Promise.any([api.verify(storedToken), api.verifyOng(storedToken)])
      
      setUserOrOng(response);
      setIsLoggedIn(true);

    } catch (error) {
      setIsLoggedIn(false);
      console.log(error)
      setUserOrOng(null);
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
        userOrOng,
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
