import axios from "axios";
import { storeToken, getToken } from "../utils/token.utils";

const baseURL = process.env.REACT_APP_API_URI || "http://localhost:5000";

class ProjectApi {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL,
    });
    this.api.interceptors.request.use((req) => {
      const token = getToken();
      if (token) req.headers = { Authorization: `Bearer ${token}` };
      return req;
    });
  }

  getPets = async () => {
    try {
      const { data } = await this.api.get("/pets");
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  getUserPets = async () => {
    try {
      const { data } = await this.api.get("/pets/user-pets");
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };
  getOnePet = async (petId) => {
    try {
      const { data } = await this.api.get(`/pets/${petId}`);
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  newPet = async ({
    name,
    description,
    category,
    gender,
    breed,
    age,
    color,
    castrated,
    vaccinated,
    profileImgUrl,
  }) => {
    const petData = new FormData();
    petData.append("name", name);
    petData.append("description", description);
    petData.append("category", category);
    petData.append("gender", gender);
    petData.append("breed", breed);
    petData.append("age", age);
    petData.append("color", color);
    petData.append("castrated", castrated);
    petData.append("vaccinated", vaccinated);
    petData.append("profileImgUrl", profileImgUrl);

    try {
      const { data } = await this.api.post("/pets/new-pet", petData);
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  editPet = async (
    petId,
    {
      name,
      description,
      category,
      gender,
      breed,
      age,
      color,
      castrated,
      vaccinated,
      profileImgUrl,
    }
  ) => {
    const petData = new FormData();
    petData.append("name", name);
    petData.append("description", description);
    petData.append("category", category);
    petData.append("gender", gender);
    petData.append("breed", breed);
    petData.append("age", age);
    petData.append("color", color);
    petData.append("castrated", castrated);
    petData.append("vaccinated", vaccinated);
    petData.append("profileImgUrl", profileImgUrl);

    try {
      const { data } = await this.api.put(`/pets/${petId}`, petData);
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  removePet = async (petId) => {
    try {
      const { data } = await this.api.delete(`/pets/${petId}`);
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  getOneUser = async () => {
    try {
      const { data } = await this.api.get("/auth/user");
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  getUserById = async (userId) => {
    try {
      const { data } = await this.api.get(`/auth/owner/${userId}`)
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  getOneOng = async (ongId) => {
    try {
      const { data } = await this.api.get(`/auth-ongs/${ongId}`);
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  getOngs = async () => {
    try {
      const { data } = await this.api.get("/auth-ongs");
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  signup = async ({
    name,
    username,
    email,
    password,
    contact,
    profileImgUrl,
  }) => {
    const userData = new FormData();
    userData.append("name", name);
    userData.append("username", username);
    userData.append("email", email);
    userData.append("password", password);
    userData.append("contact", contact);
    userData.append("profileImgUrl", profileImgUrl);

    try {
      const { data } = await this.api.post("/auth/signup", userData);
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  signupOng = async ({
    name,
    username,
    email,
    password,
    contact,
    identification,
    profileImgUrl,
    acceptDonation,
  }) => {
    const ongData = new FormData();
    ongData.append("name", name);
    ongData.append("username", username);
    ongData.append("email", email);
    ongData.append("password", password);
    ongData.append("contact", contact);
    ongData.append("identification", identification);
    ongData.append("acceptDonation", acceptDonation);
    ongData.append("profileImgUrl", profileImgUrl);
    try {
      const { data } = await this.api.post("/auth-ongs/signup", ongData);
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  editUser = async ({ name, username, email, contact, profileImgUrl }) => {
    const userData = new FormData();
    userData.append("name", name);
    userData.append("username", username);
    userData.append("email", email);
    userData.append("contact", contact);
    userData.append("profileImgUrl", profileImgUrl);

    try {
      const { data } = await this.api.put(`/auth/edit`, userData);
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  editOng = async ({
    name,
    username,
    email,
    contact,
    identification,
    profileImgUrl,
    acceptDonation,
  }) => {
    const ongData = new FormData();
    ongData.append("name", name);
    ongData.append("username", username);
    ongData.append("email", email);
    ongData.append("contact", contact);
    ongData.append("identification", identification);
    ongData.append("acceptDonation", acceptDonation);
    ongData.append("profileImgUrl", profileImgUrl);

    try {
      const { data } = await this.api.put("/auth-ongs/edit", ongData);
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  login = async ({ email, password }) => {
    try {
      const { data } = await this.api.post("/auth/login", { email, password });
      storeToken(data.token);
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  loginOng = async ({ email, password }) => {
    try {
      const { data } = await this.api.post("/auth-ongs/login", {
        email,
        password,
      });
      storeToken(data.token);
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  verify = async () => {
    try {
      let { data } = await this.api.get("/auth/verify");
      return data;
      // if (data.type === "User") return data;
      // data = await this.api.get("/auth-ongs/verify");
      // return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };

  verifyOng = async () => {
    try {
      const { data } = await this.api.get("/auth-ongs/verify");
      return data;
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  };
}

const projectApi = new ProjectApi(baseURL);
export default projectApi;
