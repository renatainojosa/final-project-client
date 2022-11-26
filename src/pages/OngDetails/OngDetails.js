import api from "../../api/project.api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./OngDetails.css";

const OngDetails = () => {
  const [loading, setLoading] = useState(false);
  const [ong, setOng] = useState({});
  const { ongId } = useParams();

  useEffect(() => {
    setLoading(true)
    api
      .getOneOng(ongId)
      .then((response) => {
        setOng(response);
        setLoading(false)
      })
      .catch((error) => {
        throw (error.response && error.response.data) || error.message || error;
      });
  }, []);

  return (
    <div className="ongDetail-container">
      <img src={ong.profileImgUrl} alt="ongImg" style={{ width: "30rem" }} />
      <div>
        <h1>{ong.name}</h1>
        <h3>{ong.acceptDonation ? 'We accept donnation to help our pets!' 
        : 'We don\'t accept donnation :('}</h3>
        <p>{ong.email}</p>
        <p>{}</p>
      </div>
    </div>
  );
};

export default OngDetails;
