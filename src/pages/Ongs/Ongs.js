import './Ongs.css'
import api from "../../api/project.api";
import { useState, useEffect } from 'react';
import CardOng from '../../components/CardOng/CardOng';
import { firstLetter } from '../../utils/other.utils';

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
          <CardOng 
            keyId={ong._id}
            ongImg={ong.profileImgUrl}
            ongName={firstLetter(ong.name)}
            route={`/ongs/${ong._id}/about`}
            text='About this ONG' />
        )
      })}
    </div>
  )
}

export default Ongs;