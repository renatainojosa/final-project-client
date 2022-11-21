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
                <Link to={`/my-profile/my-pets/${pet._id}/edit`} className="btn btn-primary">Remove Pet</Link>
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