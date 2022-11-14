import "./HomePage.css";
import { Link } from "react-router-dom"
import imgPets from "../../images/pngwing.com.png";

const HomePage = () => {
  

  return (
    <div className="home-container">
      <div>
        <h1>Welcome!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec velit
          enim, ultricies vel sapien et, imperdiet imperdiet dolor. Cras a
          consequat libero, sit amet malesuada mauris. Proin et dolor
          consectetur, pulvinar libero ac, faucibus odio. Proin at tempor magna.
          Aenean in sodales tellus. Mauris eu leo non eros dapibus convallis.
          Donec sed purus nisi. Vestibulum mattis facilisis bibendum. Mauris
          blandit justo a lectus fringilla, quis pellentesque arcu gravida.
          Curabitur a sollicitudin erat. Sed nec tempor mauris, vitae facilisis
          mi. Vestibulum ut vehicula lacus. Ut eu mattis odio, quis ullamcorper
          nulla.
        </p>
      </div>
      <div>
        <Link to='/instructions'>
          <button>
            How do I adopt a pet?
          </button>
        </Link>
      </div>
      <img className="img-pets" src={imgPets} alt="img-pets" />
    </div>
  );
};

export default HomePage;
