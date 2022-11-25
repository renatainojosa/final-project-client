import { Link } from "react-router-dom";

const CardOng = ({keyId, ongName, route, text}) => {
  return (
    <div>
      <div className="ongs-container">
        <div className="card" style={{ width: "18rem" }} key={keyId}>
          <div className="card-body">
            <h3 className="card-title">{ongName}</h3>
            <Link to={route} className="btn btn-new-pet">
              {text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOng;
