import React from 'react';
/* MATERIAL UI COMPONENTS */
import CardActionArea from '@material-ui/core/CardActionArea';
/* OWN STYLES */
import './header.css';

function Header(props) {

    const {name, degree} = props

  return (
    <CardActionArea>
      <header className="cv-header">
          <div className="cv-header-title">
          <h1>{name}</h1>
          <h2>{degree}</h2>
          </div>
      </header>
    </CardActionArea>
  );
}

Header.defaultProps = {
    name: "ENTER YOUR NAME",
    degree: "ENTER YOUR DEGREE"
};


export default Header;

