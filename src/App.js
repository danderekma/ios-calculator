import React from "react";
import Field from "./Components/Field"
import { evaluate } from "mathjs";
import NumberButton from "./Components/NumberButton";
import OperatorButton from "./Components/OperatorButton";
import EqualsButton from "./Components/EqualsButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      previousValue: "",
      operation: "",
      opToggle: false
    }
    this.handleNumInput = this.handleNumInput.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
  }

  handleNumInput(num) {
    let opInProgress = false;
    if (this.state.currentValue && this.state.operation) {
      this.setState({previousValue: this.state.currentValue});
      opInProgress = true;
    }
    if (this.state.currentValue && !opInProgress) {
      this.setState({currentValue: this.state.currentValue.concat(num)});
      return;
    }
    this.setState({currentValue: num});
  }
  handleEquals() {
    if (this.state.previousValue && this.state.currentValue) {
      this.setState({
        currentValue: evaluate(this.state.previousValue + this.state.operation + this.state.currentValue),
        previousValue: ""
      });
    }
  }
  handleOperation(op) {
    this.setState({operation: op});
    this.handleEquals();
  }
  handleToggle(isToggled) {
    this.setState({opToggle: isToggled});
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
        <OperatorButton value="+" handleOperation={this.handleOperation} handleToggle={this.handleToggle}/>
        <OperatorButton value="-" handleOperation={this.handleOperation} handleToggle={this.handleToggle}/>
        <OperatorButton value="*" handleOperation={this.handleOperation} handleToggle={this.handleToggle}/>
        <OperatorButton value="/" handleOperation={this.handleOperation} handleToggle={this.handleToggle}/>
        <EqualsButton value="=" handleEquals={this.handleEquals}/>
      </div>
    );
  }
}

export default App;