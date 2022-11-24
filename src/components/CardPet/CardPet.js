import { Link } from "react-router-dom";

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
    <div className="card" style={{ width: "18rem" }} key={keyId}>
      <img className="card-img-top" src={image} alt="img pet" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <div className="buttons">
          <Link to={route} className="btn btn-primary">
            {text}
          </Link>
          <button className="btn btn-primary" onClick={clickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPet;
