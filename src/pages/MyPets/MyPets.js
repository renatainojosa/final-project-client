import './MyPets.css';
import api from '../../api/project.api';
import {useState, useEffect} from 'react'; 

const MyPets = () => {
    const [myPets, setMyPets] = useState([]);

  return (
    <div>MyPets</div>
  )
};

export default MyPets;