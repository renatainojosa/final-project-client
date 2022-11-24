import './Pets.css'
import api from "../../api/project.api";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardPet from '../../components/CardPet/CardPet';

const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api
      .getPets()
      .then((result) => {
        setPets(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className= 'pets-container'>
      {pets.map((pet) => {
        return (
          <CardPet 
            keyId={pet._id}
            image={pet.profileImgUrl}
            name={pet.name}
            route={`/pets/${pet._id}/about`}
            text='About this pet'
          />
        )
      })}
    </div>
    
  )
}

export default Pets;