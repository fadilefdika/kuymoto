import './desk.css';
import react from 'react';
import bg from '../../../asets/foto/LP.jpg';
import bn from '../../../asets/foto/banner 2.jpg';
import br from '../../../asets/foto/banner.jpg';
import Excess from '../excess/excess';

const Desk = () => {
  return (
    <react.Fragment>
      <div className="deskripsi">
        <div className="desk">
          <h4>Abadikan setiap momenmu</h4>
          <p id="p1">Tidak semua momen bisa ingat </p>
          <p id="p2">maka jadikanlah semua itu dalam bentuk foto ataupun video</p>
          <button className="shop">Shop Now</button>
        </div>
        <div className="foto">
          <div className="back">
            <img src={bg} id="satu"></img>
            <img src={bn} id="dua"></img>
            <img src={br} id="tiga"></img>
          </div>
        </div>
      </div>

      <Excess />
    </react.Fragment>
  );
};

export default Desk;
