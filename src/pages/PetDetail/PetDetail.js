import api from "../../api/project.api";
import { useState, useContext } from "react";
import { useNavigate, useParams, useEffect } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const PetDetail = () => {
    const { userOrOng } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { petId } = useParams();

    useEffect(() => {
        api
          .getOnePet(petId)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            throw (error.response && error.response.data) || error.message || error;
          });
      }, []);

  return (
    <div>PetDetail</div>
  )
}

export default PetDetail;