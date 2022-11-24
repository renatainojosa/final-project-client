import "./HomePage.css";
import { Link } from "react-router-dom"

const HomePage = () => {
  

  return (
    <div className="home-container">
      <div className="home-text">
        <h2>Welcome!</h2>
        <h4>
          Here you will met the cutiest pets who needs love and a home! 
        </h4>
        <Link to='/instructions'>
          <button className="btn btn-lg">
            How do I adopt a pet?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
