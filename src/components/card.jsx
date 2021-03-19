import React from "react";

// Display all details of a link
const Card = ({ link }) => (
  <div className="card">
    <div className="card_image-box">
      <img
        className="card_image-box__display"
        alt={`${link.name} logo`}
        src={link.imageLink}
      />
    </div>

    <h2 className="heading-secondary">{link.name}</h2>
    <div className="card_description">
      <p>{link.description}</p>
    </div>

    <a className="card_link" href={link.link} target="_blank" rel="noreferrer">
      GO TO SITE
    </a>
  </div>
);

export default Card;
