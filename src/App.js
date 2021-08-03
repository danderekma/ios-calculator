import React from "react";
import Field from "./Components/Field"
import NumberButton from "./Components/NumberButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "0",
      previousValue: "",
      operation: ""
    }
    this.handleNumInput = this.handleNumInput.bind(this);
  }

  handleNumInput = (num) => {
    this.setState({currentValue: num})
  }

  render() {
    return (
      <div>
        <h1>iOS Calculator</h1>
        <Field value={this.state.currentValue}/>
        <NumberButton value="0" handleNumInput={this.handleNumInput}/>
        <NumberButton value="1" handleNumInput={this.handleNumInput}/>
        <NumberButton value="2" handleNumInput={this.handleNumInput}/>
        <NumberButton value="3" handleNumInput={this.handleNumInput}/>
        <NumberButton value="4" handleNumInput={this.handleNumInput}/>
        <NumberButton value="5" handleNumInput={this.handleNumInput}/>
        <NumberButton value="6" handleNumInput={this.handleNumInput}/>
        <NumberButton value="7" handleNumInput={this.handleNumInput}/>
        <NumberButton value="8" handleNumInput={this.handleNumInput}/>
        <NumberButton value="9" handleNumInput={this.handleNumInput}/>
      </div>
    );
  }
}

export default App;