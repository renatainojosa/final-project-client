import "./MyPets.css";
import api from "../../api/project.api";
import { useState, useEffect } from "react";
import CardPet from "../../components/CardPet/CardPet";

const MyPets = () => {
  const [myPets, setMyPets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPets = () => {
    api
      .getUserPets()
      .then((result) => {
        setMyPets(result);
        setIsLoading(false);
      })
      .catch((error) => {
        throw (error.response && error.response.data) || error.message || error;
      });
  };

  useEffect(() => {
    setIsLoading(true);
    getPets();
  }, []);

  const removePet = async (petId) => {
    try {
      setIsLoading(true);
      await api.removePet(petId);
      window.alert("Pet deleted!");
      getPets();
    } catch (error) {
      throw (error.response && error.response.data) || error.message || error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2>My Pets</h2>
      <div className="my-pets-container">
        {myPets.map((pet) => {
          return (
            <CardPet 
              keyId={pet._id}
              image={pet.profileImgUrl}
              name={pet.name}
              description={pet.description}
              route={`/my-profile/my-pets/${pet._id}/edit`}
              text='Edit'
              clickButton={() => {removePet(pet._id)}}
              buttonText='Remove'
            />
          );
        })}
        {isLoading && 'Loading...'}
      </div>
    </>
  );
};

export default MyPets;
