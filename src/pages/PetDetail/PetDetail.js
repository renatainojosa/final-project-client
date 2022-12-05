import api from "../../api/project.api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PetDetail.css";

const PetDetail = () => {
  const [loading, setLoading] = useState(false);
  const [pet, setPet] = useState({});
  const { petId } = useParams();

  useEffect(() => {
    api
      .getOnePet(petId)
      .then((response) => {
        setPet(response);
      })
      .catch((error) => {
        throw (error.response && error.response.data) || error.message || error;
      });
  }, []);

  return (
    <div className="petDetail-container">
      <img src={pet.profileImgUrl} alt="petImg" style={{ width: "30rem" }} />
      <div className="pet-detail-text">
        <h1>{pet.name}</h1>
        <h3>{pet.description}</h3>
        <p>{pet.age}</p>
        <p>{}</p>
      </div>
    </div>
  );
};

export default PetDetail;
