import Link from 'gatsby-link';
import React, { Component } from 'react';

import logoImg from '../images/support-akron-logo.png';

export class Header extends Component {
  render() {
    return (
      <section className="header-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 text-left">
              <Link to="/" className="brand-logo">
                <img src={logoImg} alt="brand logo" />
              </Link>
            </div>
            <div className="col-lg-9 col-md-12 text-right">
              <nav id="main-menu" className="text-right">
                <ul>
                  <li>
                    <Link to="/about/">Purpose</Link>
                  </li>
                  <li>
                    <Link to="/business/">Local Listings</Link>
                  </li>
                  <li>
                    <Link to="/contact/">Get Listed</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
