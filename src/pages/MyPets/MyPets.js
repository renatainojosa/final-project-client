import './MyPets.css';
import api from '../../api/project.api';
import {useState, useEffect} from 'react'; 
import { Link } from 'react-router-dom'

const MyPets = () => {
    const [myPets, setMyPets] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      setIsLoading(true)
      api
        .getUserPets()
        .then((result) => {
          setMyPets(result)
          setIsLoading(false)
        })
        .catch((error) => {
          throw (error.response && error.response.data) || error.message || error;
        })
    }, [])
  return (
    <div>
      <h2>My Pets</h2>
      {myPets.map((pet) => {
        return (
          <div key={pet._id}>
            <h4>{pet.name}</h4>
            <Link to={`/my-profile/my-pets/${pet._id}/edit`}><button>Edit</button></Link>
            <button>Remove</button>
            {isLoading && 'Loading...'}
          </div>
        ) 
      })}
    </div>
  )
};

export default MyPets;