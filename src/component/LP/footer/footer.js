import './footer.css';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="company">
          <h5 id="company">Company :</h5>
          <p>about us</p>
          <p>team</p>
          <p>media</p>
        </div>
        <div className="medsos">
          <h5 id="follow">Follow us :</h5>
          <FaFacebook id="fa" className="facebook" />
          <FaInstagram id="fa" className=" instagram" />
          <FaTiktok id="fa" className="tiktok" />
          <FaTwitter id="fa" className="twitter" />
        </div>
        <div className="usefull">
          <h5 id="usefull">Usefull link :</h5>
          <p>terms of use</p>
          <p>privacy policy</p>
          <p>cookie policy</p>
          <p>cookie settings</p>
        </div>
      </div>
      <p className="copyright">copyright 2022</p>
    </footer>
  );
};

export default Footer;
