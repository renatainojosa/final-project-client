import './Ongs.css'
import api from "../../api/project.api";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Ongs = () => {
  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    api
      .getOngs()
      .then((result) => {
        setOngs(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='ongs-container'>
      {ongs.map((ong) => {
        return (
          <div className="card" style={{width: '18rem'}} key={ong._id}>
            <img className='card-img-top' src={ong.profileImgUrl} alt='img ong' />
            <div className="card-body">
              <h5 className="card-title">{ong.name}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='/ongs/ong-details' className="btn btn-primary">ONG Details</Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Ongs;