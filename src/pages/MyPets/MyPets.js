import './MyPets.css';
import api from '../../api/project.api';
import {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom'

const MyPets = () => {
    const [myPets, setMyPets] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const getPets = () => {
      api
      .getUserPets()
      .then((result) => {
        setMyPets(result)
        setIsLoading(false)
      })
      .catch((error) => {
        throw (error.response && error.response.data) || error.message || error;
      })
    }

    useEffect(() => {
      setIsLoading(true)
      getPets();
    }, [])

    const removePet = async (petId) => {
      try {
        setIsLoading(true)
        await api.removePet(petId)
        window.alert("Pet deleted!");
        getPets();
      } catch (error) {
        throw (error.response && error.response.data) || error.message || error;
      } finally {
        setIsLoading(false)
      }
    };

  return (
    <>
      <h2>My Pets</h2>
    <div className='my-pets-container'>
      {myPets.map((pet) => {
        return (
          // <div key={pet._id}>
          //   <h4>{pet.name}</h4>
          //   <Link to={`/my-profile/my-pets/${pet._id}/edit`}><button>Edit</button></Link>
          //   <button>Remove</button>
          //   {isLoading && 'Loading...'}
          // </div>
          
            <div className="card" style={{width: '18rem'}} key={pet._id}>
              <img className='card-img-top' src={pet.profileImgUrl} alt='img pet' />
              <div>
                <h5 className="card-title">{pet.name}</h5>
                <p className="card-text">{pet.description}</p>
                <Link to={`/my-profile/my-pets/${pet._id}/edit`} className="btn btn-primary">Edit Pet</Link>
                <button className="btn btn-primary" onClick={() => removePet(pet._id)}>Remove Pet</button>
                {isLoading && 'Loading...'}
              </div>
          </div>
        ) 
      })}
    </div>
    </>
  )
};

export default MyPets;