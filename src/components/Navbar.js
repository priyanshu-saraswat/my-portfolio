import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as AboutIcon } from '../assets/icons/about.svg';
import { ReactComponent as PortfolioIcon } from '../assets/icons/portfolio.svg';
import { ReactComponent as ContactIcon } from '../assets/icons/contact.svg';
import '../App.css';

const Navbar = () => {
  return (
    <ul className="nav-menu">
      <li>
        <Link to="/" className="nav-link">
          <HomeIcon className="nav-icon" />
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          <AboutIcon className="nav-icon" />
          About
        </Link>
      </li>
      <li>
        <Link to="/portfolio" className="nav-link">
          <PortfolioIcon className="nav-icon" />
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link">
          <ContactIcon className="nav-icon" />
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
