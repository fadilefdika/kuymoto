import React from 'react';
import Desk from '../desk/desk';
import './lp.css';
import NavB from '../navB/navB';
import Product from '../product/product';
import About from '../about/about';
import Contact from '../contact/contact';
import Footer from '../footer/footer';

const Nav = () => {
  return (
    <React.Fragment>
      <NavB />
      <Desk />
      <Product />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Nav;
