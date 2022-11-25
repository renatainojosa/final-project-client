import { Link } from "react-router-dom";
import './CardPet.css';

const CardPet = ({
  image,
  route,
  name,
  description,
  clickButton,
  keyId,
  text,
  buttonText,
}) => {
  return (
    <div className="card card-pet" key={keyId} style={{ width: "17rem" }}>
      <img
        className="card-img-top"
        src={image}
        alt="img pet"
        style={{ width: "15rem" }}
      />
      <div className="card-body" style={{ width: "15rem" }}>
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="buttons">
          <Link to={route} className="btn btn-new-pet">
            {text}
          </Link>
          <button className="btn btn-new-pet" onClick={clickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPet;
