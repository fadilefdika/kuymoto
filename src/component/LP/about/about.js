import './about.css';
import logo from '../../../asets/foto/logo.jpg';

const About = () => {
  return (
    <div className="about">
      <h3 className="judul-about">About</h3>
      <div className="card-about">
        <div className="logo-about">
          <img src={logo} id="logo"></img>
        </div>
        <div className="desk-about">
          <p>KuyMoto adalah platform e-commerce yang menjual berbagai macam alat untuk fotografi dengan produk yang berkualitas tinggi dan tentu saja dengan model terbaru.</p>
          <p>Kami ingin membuat anda mencapai kreatifitas tertinggi dan bisa membuat anda memiliki kenangan yang tak terlupakan dalam bentuk foto ataupun video</p>
        </div>
      </div>
    </div>
  );
};

export default About;
