import React from "react";
import CardItem from "./card";
import { Grid } from "@material-ui/core";

const CardList = ({ links }) => {
  return (
    <Grid item container justifyContent="center">
      {
        // Map over links to display one at a time
        links.map((link, key) => (
          <Grid item>
            <CardItem link={link} key={key} />
          </Grid>
        ))
      }
    </Grid>
  );
};
export default CardList;
