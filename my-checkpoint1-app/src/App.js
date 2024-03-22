import React from 'react';
import './App.css'; 

const NavigationMenu = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-brand">
          {/* Replace the text with brand name or logo */}
          <span>Travel</span>
        </div>
        <ul className="navbar-menu">
          <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Book</a></li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle">Packages</a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">United States of America</a>
              <a href="#" className="dropdown-item">Germany</a>
              <a href="#" className="dropdown-item">France</a>
              <a href="#" className="dropdown-item">India</a>
            </div>
          </li>
          <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Gallery</a></li>
          <li className="nav-item"><a href="#" className="nav-link">About</a></li>
        </ul>
        <div className="navbar-actions">
          <input type='text' placeholder='Search'/>
          <button className="btn btn-login">Login</button>
          <button className="btn btn-register">Register</button>
        </div>
      </nav>
      <div className="backgroundImage">
        <div className="content">
          <h1 >Welcome to World</h1>
          <h2 style={{color:"black", fontSize:"50px",marginTop:"-30px"}} id="countryName">Visit <span style={{color:"brown",}}>Germany</span></h2>
          <button style={{marginTop:"-30px"}} className="btn btn-book">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
