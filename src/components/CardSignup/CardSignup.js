import './CardSignup.css'
import { Link } from "react-router-dom";

const CardSignup = ({ route, image, type }) => {
  return (
    <div className="card-signup text-center" style={{ width: "18rem" }}>
    <img src={image} className="card-img-top" alt="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <Link to={route} className="btn btn-primary">
          {type}
        </Link>
      </div>
    </div>
  );
};

export default CardSignup;
