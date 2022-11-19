import { createContext, useState, useEffect } from "react";
import api from "../../src/api/project.api";
import { storeToken, removeToken } from "../utils/token.utils";

const AuthContext = createContext();

const AuthProviderWrapper = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userOrOng, setUserOrOng] = useState(null);
  const [ong, setOng] = useState(false);


  const authenticateUser = async () => {
    const storedToken = localStorage.getItem("token");
    try {
      if (!storedToken) {
        setIsLoggedIn(false);
        throw new Error();
      }
      const response = await Promise.any([api.verify(storedToken), api.verifyOng(storedToken)])
      // const responseUser = await api.verify(storedToken);
      // const responseOng = await api.verifyOng(storedToken);
      setIsLoggedIn(true);
      // responseUser.type = 
      setUserOrOng(response);
      setOng(!!response.identification)
    } catch (error) {
      setIsLoggedIn(false);
      setUserOrOng(null);
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
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        userOrOng,
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
