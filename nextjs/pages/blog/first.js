import ReactCardFlip from "react-card-flip";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} infinite={true}  flipDirection="horizontal">
        <div style={{ width: "500px", background: "#efefef", height: "500px", background: "#efefef" }}>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </div>
        <div style={{ width: "500px", background: "#efefef", height: "500px", background: "#000" }}>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    );
  }
}

export default App;
