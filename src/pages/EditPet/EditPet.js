import './EditPet.css'
import EditFormPet from '../../components/Forms/EditFormPet/EditFormPet'
import api from '../../api/project.api';
import {useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPet = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {petId} = useParams();

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
            profileImgUrl 
        });
          window.alert("Pet updated!");
          navigate("/my-profile/my-pets");
        } catch (error) {
          throw (error.response && error.response.data) || error.message || error;
        } finally {
          setLoading(false);
        }
      };

  return (
    <div>
        <h2>Edit Your Pet</h2>
        <EditFormPet loading={loading} onSubmit={onSubmit} submitText='Save' />
    </div>
  )
}

export default EditPet