import axios from "axios";
import { storeToken } from "../utils/token.utils";

const baseURL = process.env.REACT_APP_API_URI || "http://localhost:5000"

const getToken = () => {
  return localStorage.getItem("token");
};

class ProjectApi {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL
    });
  }
  
  
  getUsers = async () => {
    try {
      const { data } = await this.api.get('/auth/users')
      return data;
    } catch (error) {
      throw error;
    }
  }

  signup = async ({ username, email, password, contact }) => {
    try {
      const { data } = await this.api.post("/auth/signup", {
        username,
        email,
        password,
        contact,
      });
      return data;
    } catch (error) {
      throw error.response.data || error.message || error;
    }
  };

  login = async ({ email, password }) => {
    try {
      const { data } = await this.api.post("/auth/login", { email, password });
      storeToken(data.token);
    } catch (error) {
      throw error.response.data || error.message || error;
    }
  };

  verify = async () => {
    const token = getToken(); 
    try {
      const { data } = this.api.get("/auth/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      throw error.response.data || error.message || error;
    }
  };
}

const projectApi = new ProjectApi(baseURL);
export default projectApi;