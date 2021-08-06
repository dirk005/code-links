import React, { useState } from "react";
import { makeStyles, List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "100vh",
    overflowY: "scroll",
    scrollbarColor: `${theme.palette.common.red} transparent`,
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar-track": {
      width: "0.2rem",
      "-webkit-box-shadow": "inset 0 0 6px rgba(0, 0, 0, 0.1)",
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.1)",
      backgroundColor: theme.palette.common.red,
    },

    "&::-webkit-scrollbar": {
      width: "0.2rem",
      backgroundColor: theme.palette.common.red,
    },
    "&::-webkit-scrollbar-thumb": {
      width: "0.2rem",
      backgroundColor: theme.palette.common.red,
    },
  },
}));

//Print type to display buttons
const SelectType = ({ setViewType }) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const linkList = [
    { name: "All", description: "All" },
    { name: "Nodejs", description: "Node.js" },
    { name: "React", description: "React.js" },
    { name: "Redux", description: "Redux" },
    { name: "git", description: "GIT" },
    { name: "javascript", description: "Java Script" },
    { name: "HTML", description: "HTML" },
    { name: "CSS", description: "CSS" },
    { name: "styleguide", description: "Style guides" },
    { name: "database", description: "Database" },
    { name: "sql", description: "SQL" },
    { name: "mongodb", description: "Mongodb" },
    { name: "Python", description: "Python" },
    { name: "ml", description: "Machine Learning" },
    { name: "API", description: "API" },
    { name: "HTTP", description: "HTTP" },
    { name: "Hacking", description: "Hacking" },
  ];

  return (
    <div className={classes.root}>
      <List>
        {linkList.map((text, index) => (
          <ListItem
            button
            key={text.name}
            selected={index === selectedIndex}
            onClick={() => {
              setViewType(text.name);
              setSelectedIndex(index);
            }}
          >
            <ListItemText primary={text.description} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SelectType;
