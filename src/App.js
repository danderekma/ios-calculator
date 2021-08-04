import React from "react";
import { evaluate } from "mathjs";
import Field from "./Components/Field"
import ClearButton from "./Components/ClearButton";
import NumberButton from "./Components/NumberButton";
import DecimalButton from "./Components/DecimalButton";
import OperatorButton from "./Components/OperatorButton";
import EqualsButton from "./Components/EqualsButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      previousValue: "",
      operation: "",
      opToggled: false,
      invokedEquals: false
    }
    this.handleNumInput = this.handleNumInput.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleNumInput(num) {
    if (this.state.currentValue && !this.state.opToggled) {
      if (this.state.invokedEquals) {
        this.setState({
          currentValue: num,
          invokedEquals: false
        });
        return;
      }
      this.setState({currentValue: this.state.currentValue.concat(num)});
      return;
    }
    if (this.state.currentValue && this.state.operation && this.state.opToggled) {
      this.setState({
        previousValue: this.state.currentValue,
        opToggled: false
      });
    }
    this.setState({currentValue: num});
  }
  handleEquals() {
    if (this.state.previousValue && this.state.currentValue) {
      this.setState({
        currentValue: evaluate(this.state.previousValue + this.state.operation + this.state.currentValue),
        previousValue: "",
        invokedEquals: true
      });
    }
  }
  handleDecimal() {
    this.handleNumInput(".");
  }
  handleOperation(op) {
    this.setState({operation: op});
    this.handleEquals();
  }
  handleClear() {
    this.setState({
      currentValue: 0,
      previousValue: "",
      operation: "",
      opToggled: false
    });
  }
  handleToggle() {
    this.setState({opToggled: true});
  }

  render() {
    return (
      <div>
        <h1>iOS Calculator</h1>
        <Field value={this.state.currentValue}/>
        <ClearButton value="C" handleClear={this.handleClear}/>
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
        <DecimalButton value="." handleDecimal={this.handleDecimal}/>
        <OperatorButton value="+" handleOperation={this.handleOperation} handleToggle={this.handleToggle} isToggled={this.state.opToggled}/>
        <OperatorButton value="-" handleOperation={this.handleOperation} handleToggle={this.handleToggle} isToggled={this.state.opToggled}/>
        <OperatorButton value="*" handleOperation={this.handleOperation} handleToggle={this.handleToggle} isToggled={this.state.opToggled}/>
        <OperatorButton value="/" handleOperation={this.handleOperation} handleToggle={this.handleToggle} isToggled={this.state.opToggled}/>
        <EqualsButton value="=" handleEquals={this.handleEquals}/>
      </div>
    );
  }
}

export default App;