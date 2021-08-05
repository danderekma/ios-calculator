import React from "react";
import { evaluate } from "mathjs";
import Field from "./Components/Field"
import ClearButton from "./Components/ClearButton";
import SignButton from "./Components/SignButton";
import NumberButton from "./Components/NumberButton";
import DecimalButton from "./Components/DecimalButton";
import OperatorButton from "./Components/OperatorButton";
import EqualsButton from "./Components/EqualsButton";

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
    this.handleClear = this.handleClear.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleSign = this.handleSign.bind(this);
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
    this.handleNumInput(".");
  }
  handleOperation(op) {
    this.handleEquals();
    this.setState({
      operation: op,
      invokedEquals: false
    });
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
  handleToggle() {
    this.setState({opToggled: true});
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

  render() {
    return (
      <div>
        <h1>iOS Calculator</h1>
        <Field value={this.state.currentValue}/>
        <ClearButton value="C" handleClear={this.handleClear}/>
        <SignButton value="+/-" handleSign={this.handleSign}/>
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