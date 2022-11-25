import "./Ongs.css";
import api from "../../api/project.api";
import { useState, useEffect } from "react";
import CardOng from "../../components/CardOng/CardOng";
import { firstLetter } from "../../utils/other.utils";

const Ongs = () => {
  const [ongs, setOngs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .getOngs()
      .then((result) => {
        setOngs(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="ongs-container">
      <div className="title-ongs">
        <h2>ONGs</h2>
      </div>
      <div className="ongs-list">
        {ongs.map((ong) => {
          return (
            <CardOng
              keyId={ong._id}
              ongImg={ong.profileImgUrl}
              ongName={firstLetter(ong.name)}
              route={`/ongs/${ong._id}/about`}
              text="About this ONG"
            />
          );
        })}
      </div>
      {isLoading && "Loading..."}
    </div>
  );
};

export default Ongs;
