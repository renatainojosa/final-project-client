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
  
  getPets = async () => {
    try {
      const { data } = await this.api.get('/pets')
      return data;
    } catch (error) {
      throw error;
    }
  }

  newPet = async ({name, description, category, gender, breed, age, color, castrated, vaccinated, profileImgUrl}) => {
    const petData = new FormData();
    petData.append('name', name);
    petData.append('description', description);
    petData.append('category', category);
    petData.append('gender', gender);
    petData.append('breed', breed);
    petData.append('age', age);
    petData.append('color', color);
    petData.append('castrated', castrated);
    petData.append('vaccinated', vaccinated);
    petData.append('profileImgUrl', profileImgUrl);

    try {
      const { data } = this.api.post("/pets/new-pet", petData);
      return data;
    } catch (error) {
      throw error.response.data || error.message || error;
    }
  };

  signup = async ({ username, email, password, contact, profileImgUrl }) => {
    const userData = new FormData();
    userData.append('username', username);
    userData.append('email', email);
    userData.append('password', password);
    userData.append('contact', contact);
    userData.append('profileImgUrl', profileImgUrl);

    try {
      const { data } = await this.api.post("/auth/signup", userData);
      return data;
    } catch (error) {
      throw error.response.data || error.message || error;
    }
  };

  signupOng = async ({ username, email, password, contact, identification, profileImgUrl, acceptDonation }) => {
    const ongData = new FormData();
    ongData.append('username', username);
    ongData.append('email', email);
    ongData.append('password', password);
    ongData.append('contact', contact);
    ongData.append('identification', identification);
    ongData.append('acceptDonation', acceptDonation);
    ongData.append('profileImgUrl', profileImgUrl);
    try {
      const { data } = await this.api.post("/auth-ongs/signup", ongData);
      return data;
    } catch (error) {
      throw error.response.data || error.message || error;
    }
  };

  editUser = async ({ username, email, password, contact, profileImgUrl }) => {
    const userData = new FormData();
    userData.append('username', username);
    userData.append('email', email);
    userData.append('password', password);
    userData.append('contact', contact);
    userData.append('profileImgUrl', profileImgUrl);

    try {
      const { data } = await this.api.put("/auth/:userId/edit", userData);
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
  
  loginOng = async ({ email, password }) => {
    try {
      const { data } = await this.api.post("/auth-ongs/login", { email, password });
      storeToken(data.token);
    } catch (error) {
      throw error.response.data || error.message || error;
    }
  };

  

  verify = async () => {
    const token = getToken(); 
    try {
      const { data } = await this.api.get("/auth/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      throw error.response.data || error.message || error;
    }
  };

  verifyOng = async () => {
    const token = getToken(); 
    try {
      const { data } = await this.api.get("/auth-ongs/verify", {
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
