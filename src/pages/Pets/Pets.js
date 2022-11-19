import './Pets.css'
import api from "../../api/project.api";
import { useState, useEffect } from 'react';

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
    <div>
      {pets.map((pet) => {
        return (
        <div key={pet._id}>
          <h1>{pet.name}</h1>
        </div>
        )
      })}
    </div>
  )
}

export default Pets;