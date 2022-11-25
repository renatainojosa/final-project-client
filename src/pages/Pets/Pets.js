import "./Pets.css";
import api from "../../api/project.api";
import { useState, useEffect } from "react";
import CardPet from "../../components/CardPet/CardPet";

const Pets = () => {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .getPets()
      .then((result) => {
        setPets(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="pets-container">
      <div className="title-pets">
        <h2>Pets</h2>
      </div>
      <div className="pets-list">
        {pets.map((pet) => {
          return (
            <CardPet
              keyId={pet._id}
              image={pet.profileImgUrl}
              name={pet.name}
              route={`/pets/${pet._id}/about`}
              text="About this pet"
            />
          );
        })}
      </div>
      {isLoading && "Loading..."}
    </div>
  );
};

export default Pets;
