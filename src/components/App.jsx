import React from "react";

// function App(props) {
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'here we go'};
  }  
  render() {
    return (
<React.Fragment>
<input
 value={this.state.text}
 onChange={(event) => { this.setState({ text: event.target.value })}} />


    <h1>Hello, my name is {this.props.name} and {this.state.text}.</h1>
     </React.Fragment>
     );
}

    }



export default App;