import React from 'react';
/* OWN STYLES */
import './TitleDivider.css';

function TitleDivider(props) {

  const { text, icon } = props

  return (
    <div className="cv-title-divider">
      <div className="cv-title-text">
        <i className={icon}></i>
        <h2>{text}</h2>
      </div>
      <hr />
    </div>
  );
}

TitleDivider.defaultProps = {
  text: "ENTER A TITLE",
  icon: "fas fa-suitcase"
};


export default TitleDivider;

