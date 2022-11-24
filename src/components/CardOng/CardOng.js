import { Link } from "react-router-dom";

const CardOng = ({keyId, ongImg, ongName, route, text}) => {
  return (
    <div>
      <div className="ongs-container">
        <div className="card" style={{ width: "18rem" }} key={keyId}>
          <img className="card-img-top" src={ongImg} alt="img ong" />
          <div className="card-body">
            <h5 className="card-title">{ongName}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to={route} className="btn btn-primary">
              {text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOng;
