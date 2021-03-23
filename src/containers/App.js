import React, { Component } from "react";
import CardList from "../components/card-list";
import SelectType from "../components/select-type";

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: [],
      viewType: "All",
    };
  }

  componentDidMount() {
    this.getLinks();
  }

  //Get links from json file om github
  getLinks = () => {
    fetch("https://dirk005.github.io/Projects-json/json/links.json")
      .then((resp) => resp.json())
      .then((links) => this.setState({ links }))
      .catch((err) => console.log(err));
  };

  // Change the state when button is clicked to display links
  selectType = (type) => {
    console.log(type);
    switch (type) {
      case "All":
        this.setState({ viewType: "All" });
        break;
      case "Python":
        this.setState({ viewType: "Python" });
        break;
      case "Nodejs":
        this.setState({ viewType: "Nodejs" });
        break;
      case "javascript":
        this.setState({ viewType: "javascript" });
        break;
      case "CSS":
        this.setState({ viewType: "CSS" });
        break;
      case "database":
        this.setState({ viewType: "database" });
        break;
      case "mongodb":
        this.setState({ viewType: "mongodb" });
        break;
      case "HTML":
        this.setState({ viewType: "HTML" });
        break;
      case "ml":
        this.setState({ viewType: "ml" });
        break;
      case "API":
        this.setState({ viewType: "API" });
        break;
      case "HTTP":
        this.setState({ viewType: "HTTP" });
        break;
      case "React":
        this.setState({ viewType: "React" });
        break;
      case "git":
        this.setState({ viewType: "git" });
        break;
      case "sql":
        this.setState({ viewType: "sql" });
        break;
      case "Redux":
        this.setState({ viewType: "Redux" });
        break;
      case "Hacking":
        this.setState({ viewType: "Hacking" });
        break;
      case "styleguide":
        this.setState({ viewType: "styleguide" });
        break;
      default:
        this.setState({ viewType: "All" });
    }
  };

  render() {
    const { links } = this.state; //Deconstruct state

    // Filter sites by button clicked
    const filterLinks = links.filter((link) => {
      return link.type.includes(this.state.viewType);
    });
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="heading-primary">Useful Code Links</h1>
          <SelectType selectType={this.selectType} />
          {
            // Check array if any links in list  -> Print list of links
            filterLinks.length !== 0 ? <CardList links={filterLinks} /> : null
          }
        </header>
      </div>
    );
  }
}

export default App;
