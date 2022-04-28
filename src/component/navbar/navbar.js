import './navbar.css';
import { FaSearch } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import Excess from '../LP/keunggulan/keunggulan';

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="isinav">
        <p>Kamera</p>
        <p>Lensa</p>
        <p>Produk Lainnya</p>
        <FaShoppingCart className="icon" />
        <input type="text"></input>
        <FaSearch className="search" />
        <div className="notif"></div>
      </div>
      <Excess />
    </React.Fragment>
  );
};

export default Navbar;
