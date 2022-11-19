import './MyProfile.css';
import {Link} from 'react-router-dom';

const MyProfile = () => {
  return (
    <div>
        <h1>Hello, alguém!</h1>
        <Link to='/my-profile/my-pets'>My Pets</Link>
        <Link to='/my-profile/new-pet'>Register a new pet!</Link>
    </div>
  )
};

export default MyProfile;