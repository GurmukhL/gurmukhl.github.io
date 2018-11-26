import React from 'react';
import { Link } from 'react-router-dom';

import HeaderNav from '../global/HeaderNav';

var HeaderStyle = {
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'scroll',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundOrigin: 'border-box'
};

const HomeHeader = props => (
  <header className="large-header light push" style={HeaderStyle}>
    <HeaderNav />

    <div className="header-container">
      <div className="content">
        <h1>
          <span role="img" aria-label="waving-hand">
            👋
          </span>
        </h1>
        <h1> Welcome!</h1>
        <Link to="/products" className="btn">
          Products
        </Link>
      </div>
    </div>
  </header>
);

export default HomeHeader;
