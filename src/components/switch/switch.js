import React from 'react';
import './switch.css';

function Switch(props) {


    const switchColors = (target)=> {
        const root = document.documentElement
        root.classList.toggle("dark-mode")
    }

  return (
    <label className="switch">
        <input type="checkbox" onChange={(e)=>{switchColors(e.target)}}/>
        <span className="slider"></span>
    </label>
  );
}

export default Switch;