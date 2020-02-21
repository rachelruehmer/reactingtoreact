import React from "react";

// function App(props) {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "here we go",
      loaded: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      loaded: true
    });
  }

  render() {
    if (this.state.loaded) {
      return <h1>Welcome!</h1>;
    } else {
      return (
        <React.Fragment>
          <h3>Loading...</h3>
          <button onClick={this.handleClick}>Click Me!</button>
          <input
            value={this.state.text}
            onChange={event => {
              this.setState({ text: event.target.value });
            }}
          />
          <h1>
            Hello, my name is {this.props.name} and {this.state.text}.
          </h1>
        </React.Fragment>
      );
    }
  }
}

export default App;
