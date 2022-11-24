import "./HomePage.css";
import { Link } from "react-router-dom"

const HomePage = () => {
  

  return (
    <div className="home-container">
      <div className="home-text">
        <h1>Welcome!</h1>
        <h5>
          Here you will met the cutiest pets who needs love and a home! 
        </h5>
      <div>
        <Link to='/instructions'>
          <button className="btn btn-warning btn-lg">
            How do I adopt a pet?
          </button>
        </Link>
      </div>
      </div>
      {/* <div className="pet-img">
        <img className="img-pets" src={imgPets} alt="img-pets" />
      </div> */}
    </div>
  );
};

export default HomePage;
