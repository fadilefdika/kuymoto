import react from 'react';
import flsh from '../../../asets/foto/Flash Canon 470EX.jpg';
import gmbl from '../../../asets/foto/Gimbal stabilizer.jpg';
import sny from '../../../asets/foto/Sony WX500.jpg';
import lns from '../../../asets/foto/lensa Canon EW-82.jpg';
import './product.css';

const Product = () => {
  return (
    <react.Fragment>
      <div className="product">
        <div className="camera">
          <div className="bc">
            <img src={sny} id="sny" className="i"></img>
          </div>
          <div className="lpdesk">
            <p>Sony WX500</p>
            <p id="h">Rp 4.000.000,00</p>
          </div>
        </div>
        <div className="flash">
          <div className="bc">
            <img src={flsh} id="flsh " className="i"></img>
          </div>
          <div className="lpdesk">
            <p>Flash Canon 470EX</p>
            <p id="h">Rp 7.000.000,00</p>
          </div>
        </div>
        <div className="lensa">
          <div className="bc">
            <img src={lns} id="lns" className="i"></img>
          </div>
          <div className="lpdesk">
            <p>Lensa Canon EW-82</p>
            <p id="h">Rp 3.500.00,00</p>
          </div>
        </div>
        <div className="gimbal">
          <div className="bc">
            <img src={gmbl} id="gmbl" className="i"></img>
          </div>
          <div className="lpdesk">
            <p>Gimbal Stabilizer</p>
            <p id="h">Rp 4.250.000,00</p>
          </div>
        </div>
      </div>
      <button className="selengkapnya">selengkapnya</button>
    </react.Fragment>
  );
};

export default Product;
