import "./EditPet.css";
import EditFormPet from "../../components/Forms/EditFormPet/EditFormPet";
import api from "../../api/project.api";
import { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const EditPet = () => {
  const { userOrOng } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { petId } = useParams();

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
      await api.editPet(petId, {
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
      window.alert("Pet updated!");
      userOrOng.type === "User"
        ? navigate("/my-profile/my-pets")
        : navigate("/my-profile-ong/my-pets");
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Edit Your Pet</h2>
      <EditFormPet loading='Loading...' onSubmit={onSubmit} submitText="Save" />
    </div>
  );
};

export default EditPet;
