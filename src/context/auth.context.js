import { createContext, useState, useEffect } from "react";
import api from "../../src/api/project.api";
import { storeToken, removeToken } from "../utils/token.utils";
import { useNavigate } from "react-router-dom"; 

const AuthContext = createContext();

const AuthProviderWrapper = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [ong, setOng] = useState({});
  const navigate = useNavigate();


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
      
      console.log(response.type)
      setIsLoggedIn(true);
      setUser(response);
      setOng(response);
      // if (response.type === 'Ong') {
      //   setOng(response)
      // } else {
      //   setUser(response);
      //   console.log(user)
      // }
      
      
      // setIsLoggedIn(true);
      // responseUser.type = 
      // setUserOrOng(response);
      // setOng(!!response.identification)
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
