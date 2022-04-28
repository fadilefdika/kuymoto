import './navB.css';
import react from 'react';

const NavB = () => {
  return (
    <react.Fragment>
      <div className="navbar">
        <div className="logo">
          <h1>KuyMoto</h1>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#product">product </a>
            </li>
            <li>
              <a href="#about us">about us</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="garis">
        <div id="garisa"></div>
        <div id="garisb"></div>
        <div id="garisc"></div>
      </div>
    </react.Fragment>
  );
};

export default NavB;
