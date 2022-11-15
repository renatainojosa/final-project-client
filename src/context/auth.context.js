import { createContext, useState, useEffect } from "react";
import api from "../../src/api/project.api";

const AuthContext = createContext();

const AuthProviderWrapper = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [ong, setOng] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("token", token);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  const authenticateUser = async () => {
    const storedToken = localStorage.getItem("token");
    try {
      if (!storedToken) {
        throw new Error();
      }
      const responseUser = api.verify(storedToken);
      const responseOng = api.verifyOng(storedToken);
      setIsLoggedIn(true);
      setUser(responseUser);
      setOng(responseOng);
    } catch (error) {
      setIsLoggedIn(false);
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
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProviderWrapper };
