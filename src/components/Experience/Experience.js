import React from 'react';
/* OWN STYLES */
import './Experience.css';

function Experience(props) {

    const { enterpriseName, location,  date, description} = props.data

    return (
        <div className={`cv-experience ${props.className}`}>
            <article className="cv-experience-text">
                <div className="company-name">
                    <h4><b>{enterpriseName} |</b> {location}</h4>
                </div>
                <div className="date">
                    <small>{date}</small>
                </div>
                <div className="activities">
                    <p>
                        {description}
                    </p>
                </div>
            </article>
        </div>
    );
}

export default Experience;

