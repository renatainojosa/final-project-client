import api from "../../api/project.api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PetDetail.css";
import Loading from "../../components/Loading/Loading";

const PetDetail = () => {
  const [loading, setLoading] = useState(false);
  const [pet, setPet] = useState({});
  const { petId } = useParams();

  useEffect(() => {
    setLoading(true)
    api
      .getOnePet(petId)
      .then((response) => {
        setPet(response);
        setLoading(false)
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
      {loading && <Loading />}
    </div>
  );
};

export default PetDetail;
