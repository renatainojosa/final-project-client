import './Pets.css'
import api from "../../api/project.api";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <div className="card" style={{width: '18rem'}} key={pet._id}>
            <img className='card-img-top' src={pet.profileImgUrl} alt='img pet' />
            <div className="card-body">
              <h5 className="card-title">{pet.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='/pet-details' className="btn btn-primary">Pet Details</Link>
            </div>
          </div>
        )
      })}
    </div>
    
  )
}

export default Pets;