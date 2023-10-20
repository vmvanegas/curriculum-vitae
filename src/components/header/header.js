import React from 'react';
/* MATERIAL UI COMPONENTS */
/* OWN STYLES */
import './Header.css';

function Header(props) {

    const {name, degree} = props

  return (
      <header className="cv-header">
          <div className="cv-header-title">
          <h1>{name}</h1>
          <h2>{degree}</h2>
          </div>
      </header>
  );
}

Header.defaultProps = {
    name: "ENTER YOUR NAME",
    degree: "ENTER YOUR DEGREE"
};


export default Header;

