import React from "react";
import { evaluate } from "mathjs";
import Field from "./components/Field"
import ClearButton from "./components/ClearButton";
import SignButton from "./components/SignButton";
import PercentButton from "./components/PercentButton";
import NumberButton from "./components/NumberButton";
import DecimalButton from "./components/DecimalButton";
import OperatorButton from "./components/OperatorButton";
import EqualsButton from "./components/EqualsButton";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "0",
      previousValue: "",
      operation: "",
      opToggled: false,
      invokedEquals: false
    }
    this.handleNumInput = this.handleNumInput.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperation = this.handleOperation.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSign = this.handleSign.bind(this);
    this.handlePercent = this.handlePercent.bind(this);
  }

  handleNumInput(num) {
    if (this.state.opToggled) {
      this.setState({
        previousValue: this.state.currentValue,
        currentValue: num, 
        opToggled: false
      });
    } else {
      if (this.state.invokedEquals) {
        this.setState({
          currentValue: num,
          invokedEquals: false
        });
      } else {
        if (this.state.currentValue === "0") {
          this.setState({currentValue: num});
        } else if (this.state.currentValue === "-0") {
          this.setState({currentValue: "-".concat(num)})
        } else {
          this.setState({currentValue: this.state.currentValue.concat(num)});
        }
      }
    }
  }
  handleEquals() {
    if (this.state.previousValue) {
      this.setState({
        currentValue: String(evaluate(this.state.previousValue + this.state.operation + this.state.currentValue)),
        previousValue: "",
        invokedEquals: true
      });
    }
  }
  handleDecimal() {
    if (this.state.opToggled || this.state.currentValue === "-0") {
      this.handleNumInput("0.")
    } else {
      if (!this.state.currentValue.includes(".")) {
        this.handleNumInput(".");
      }
    }
  }
  handleOperation(op) {
    this.handleEquals();
    if (op === "x") {
      this.setState({operation: "*"});
    } else if (op === "÷") {
      this.setState({operation: "/"});
    } else {
      this.setState({operation: op});
    }
    this.setState({invokedEquals: false});
  }
  handleToggle() {
    this.setState({opToggled: true});
  }
  handleClear() {
    this.setState({
      currentValue: "0",
      previousValue: "",
      operation: "",
      opToggled: false,
      invokedEquals: false
    });
  }
  handleSign() {
    if (this.state.opToggled) {
      this.setState({
        previousValue: this.state.currentValue,
        currentValue: "-0",
        opToggled: false
      })
    } else {
      if (this.state.currentValue.slice(0, 1) !== "-") {
        this.setState({currentValue: "-".concat(this.state.currentValue)});
      } else {
        this.setState({currentValue: this.state.currentValue.slice(1)});
      }
    }
  }
  handlePercent() {
    this.setState({currentValue: String(this.state.currentValue / 100)});
  }

  render() {
    return (
      <div id="app">
        <Field value={this.state.currentValue}/>
        <ClearButton value="C" handleClear={this.handleClear} clearState={this.state.currentValue}/>
        <SignButton value="+/-" handleSign={this.handleSign}/>
        <PercentButton value="%" handlePercent={this.handlePercent}/>
        <NumberButton num="zero" value="0" handleNumInput={this.handleNumInput}/>
        <NumberButton num="one" value="1" handleNumInput={this.handleNumInput}/>
        <NumberButton num="two" value="2" handleNumInput={this.handleNumInput}/>
        <NumberButton num="three" value="3" handleNumInput={this.handleNumInput}/>
        <NumberButton num="four" value="4" handleNumInput={this.handleNumInput}/>
        <NumberButton num="five" value="5" handleNumInput={this.handleNumInput}/>
        <NumberButton num="six" value="6" handleNumInput={this.handleNumInput}/>
        <NumberButton num="seven" value="7" handleNumInput={this.handleNumInput}/>
        <NumberButton num="eight" value="8" handleNumInput={this.handleNumInput}/>
        <NumberButton num="nine" value="9" handleNumInput={this.handleNumInput}/>
        <DecimalButton value="." handleDecimal={this.handleDecimal}/>
        <OperatorButton op="addition" value="+" handleOperation={this.handleOperation} handleToggle={this.handleToggle} isToggled={this.state.opToggled}/>
        <OperatorButton op="subtraction" value="-" handleOperation={this.handleOperation} handleToggle={this.handleToggle} isToggled={this.state.opToggled}/>
        <OperatorButton op="multiplication" value="x" handleOperation={this.handleOperation} handleToggle={this.handleToggle} isToggled={this.state.opToggled}/>
        <OperatorButton op="division" value="÷" handleOperation={this.handleOperation} handleToggle={this.handleToggle} isToggled={this.state.opToggled}/>
        <EqualsButton value="=" handleEquals={this.handleEquals}/>
      </div>
    );
  }
}

export default App;