import "./NewPet.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/project.api";
import PetForm from "../../components/Forms/PetForm/PetForm";

const NewPet = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async ({
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
    setLoading(true);
    try {
      await api.newPet({
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
      });
      navigate("/my-profile/my-pets");
    } catch (error) {
      // throw error.response.data || error.message || error;
      console.log("erro:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Register your pet:</h2>
      <PetForm loading={loading} onSubmit={onSubmit} submitText="Register" />
    </div>
  );
};

export default NewPet;
