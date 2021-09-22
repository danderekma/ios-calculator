import React from "react";
import "../styles.scss";

class OperatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: this.props.isToggled,
    };
  }

  onTrigger(event) {
    this.props.handleOperation(this.props.value);
    this.props.handleToggle();
    event.preventDefault();
  }

  render() {
    return (
      <input
        type="button"
        id={this.props.op + "-btn"}
        value={this.props.value}
        onClick={this.onTrigger.bind(this)}
      />
    );
  }
}

export default OperatorButton;
