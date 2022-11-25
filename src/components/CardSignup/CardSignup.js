import './CardSignup.css'
import { Link } from "react-router-dom";

const CardSignup = ({ route, image, type }) => {
  return (
    <div className="card-signup text-center" style={{ width: "18rem" }}>
    <img src={image} style={{width: '5rem'}} className="card-img-top" alt="card-img-top" />
      <div className="card-body">
        <Link to={route} className="btn btn-new-pet">
          {type}
        </Link>
      </div>
    </div>
  );
};

export default CardSignup;
