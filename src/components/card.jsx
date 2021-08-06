import React from "react";
import {
  Card,
  makeStyles,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
} from "@material-ui/core";

import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: "1em",
    width: "30em",
    minHeight: 200,
    [theme.breakpoints.down("md")]: {
      width: "25em",
    },
  },
  avatar: {
    backgroundColor: "transparent",
    width: 70,
    height: 70,
  },
  image: {
    width: 40,
    height: 40,
  },
}));
// Display all details of a link
const CardItem = ({ link }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <img
              className={classes.image}
              src={link.imageLink}
              alt={link.name}
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <a href={link.link} target="_blank" rel="noreferrer">
              <OpenInNewIcon />
            </a>
          </IconButton>
        }
        title={link.name}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {link.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
