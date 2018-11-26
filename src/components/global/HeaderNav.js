import React from 'react';
import { Link } from 'react-router-dom';

import CartCounter from '../Cart/CartCounter';

const HeaderNav = () => (
  <div className="nav-container">
    <nav className="primary-nav light">
      <Link to="/products">Products</Link>
    </nav>
    <div className="logo light">
      <Link to="/" className="logo-link">
        <span className="hide-content">Project Congo</span>
        <div className="big-logo" aria-hidden="true">
          <img
            className="small-logo"
            src="img/logo/ill-short-dark.svg"
            alt="Project Congo Logo"
            aria-hidden="true"
          />
          <h3 style={{ color: 'white' }}>Project Congo</h3>
        </div>
      </Link>
    </div>
    <nav className="secondary-nav light">
      <CartCounter />
    </nav>
  </div>
);

export default HeaderNav;
