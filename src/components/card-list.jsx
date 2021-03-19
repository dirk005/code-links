import React from "react";
import Card from "./card";

const CardList = ({ links }) => (
  <div className="cardList">
    {
      // Map over links to display one at a time
      links.map((link, key) => (
        <Card link={link} key={key} />
      ))
    }
  </div>
);

export default CardList;
