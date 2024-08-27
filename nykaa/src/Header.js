import React from 'react';
import './Header.css';
import { FaMobileAlt, FaMapMarkerAlt, FaGift, FaQuestionCircle, FaSearch, FaShoppingBag } from 'react-icons/fa';


const Header = () => {
  return (
    <>
      <header className="fixed-header">
        <div className="top-header">
          <div className="left-side">
            <div className="marquee-text">
              BEAUTY BONANZA Get Your Amazing Deals!
            </div>
          </div>
          <div className="right-side">
            <a href="#"><FaMobileAlt /> Get App</a>
            <div className="divider"></div>
            <a href="#"><FaMapMarkerAlt /> Store & Events</a>
            <div className="divider"></div>
            <a href="#"><FaGift /> Gift Card</a>
            <div className="divider"></div>
            <a href="#"><FaQuestionCircle /> Help</a>
          </div>
        </div>

        <div className="bottom-header">
          <div className="left-nav">
            <a href="/">
              <img src="Assets/Images/nykaa_logo.png" alt="Nykaa Logo" className="logo" />
            </a>
            <nav className="main-nav">
              <ul>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Brands</a></li>
                <li><a href="#">Luxe</a></li>
                <li><a href="#">Nykaa Fashion</a></li>
                <li><a href="#">Beauty Advice</a></li>
              </ul>
            </nav>
          </div>
          <div className="right-nav">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search on Nykaa" className="search-bar" />
            </div>
            <button className="login-btn">Login</button>
            <button className="register-btn">Register</button>
            <FaShoppingBag className="shopping-bag-icon" />
          </div>
        </div>
      </header>

      <section className="banner-section">
        <img src="Assets/Images/banner.png" alt="Nykaa Banner" className="banner-image" />
      </section>
    </>
  );
}

export default Header;
