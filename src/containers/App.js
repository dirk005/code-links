import React, { Component } from "react";
import CardList from "../components/card-list";

class App extends Component {
  constructor() {
    super();
    this.state = {
      links: [],
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

  render() {
    const { links } = this.state; //Deconstruct state

    return (
      <div className="app">
        <header className="app-header">
          <h1 className="heading-primary">Useful Code Links</h1>
          {
            // Check array if any links in list  -> Print list of links
            links.length !== 0 ? <CardList links={links} /> : null
          }
        </header>
      </div>
    );
  }
}

export default App;
