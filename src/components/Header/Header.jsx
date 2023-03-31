import React from 'react';
import './Header.scss';
import logo from '../../images/stock_logo.svg';
import liked from '../../images/liked.svg';
import cart from '../../images/cart.svg';
import Register from '../Register/Register';
import Login from '../Login/Login';

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <img className="logo" src={logo} alt="Logo" />
        <h1 className="logoName">Stock</h1>
      </div>

      <div className="headerRight">
        <a className="svgButton" href="">
          <img src={liked} alt="" />
        </a>
        <a className="svgButton" href="">
          <img src={cart} alt="" />
        </a>
        <Register />
        <p className="separator">|</p>
        <Login/>
      </div>
    </div>
  );
};

export default Header;
