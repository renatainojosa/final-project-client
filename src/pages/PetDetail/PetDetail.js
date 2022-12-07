import api from "../../api/project.api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PetDetail.css";
import Loading from "../../components/Loading/Loading";

const PetDetail = () => {
  const [loading, setLoading] = useState(false);
  const [pet, setPet] = useState({});
  const [user, setUser] = useState({})
  const { petId } = useParams();

  const getPet = async () => {
    try {
      const onePet = await api.getOnePet(petId);
      setPet(onePet);
      getOwner(onePet.ownerId)
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  }

  const getOwner = async (ownerId) => {
    try {
      let petOwner = await api.getOneOng(ownerId)
      if (!petOwner) {
        petOwner = await api.getUserById(ownerId)
      }
      setUser(petOwner)
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    }
  }

  useEffect(() => {
    setLoading(true)
    getPet();
    setLoading(false)
  }, []);

  return (
    <div className="petDetail-container">
      <img src={pet.profileImgUrl} alt="petImg" style={{ width: "30rem" }} />
      <div className="pet-detail-text">
        <h1>{pet.name}</h1>
        <h3>{pet.description}</h3>
        <h4>{pet.age}</h4>
        <h5>For more information or details call to:</h5>
        <h5>*{user.contact}*</h5>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default PetDetail;
