import React, { Component } from "react";

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

  getLinks = () => {
    fetch("https://dirk005.github.io/Projects-json/json/links.json")
      .then((resp) => resp.json())
      .then((links) => this.setState({ links: links }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Usefull Code links</h1>
          {this.state.links.map((link) => (
            <div>
              <img alt={link.imageLink} src={link.imageLink} />
              <h2>{link.name}</h2>
              <p>{link.description}</p>
              <a href={link.link} target="_blank" rel="noreferrer">
                {link.link}
              </a>
            </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
