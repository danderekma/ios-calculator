import React from "react";

class OperatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: this.props.isToggled
    }
  }
  onTrigger(event) {
    this.props.handleOperation(this.props.value);
    this.props.handleToggle();
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <input type="button" value={this.props.value} onClick={this.onTrigger.bind(this)}/>
      </div>
    );
  }
}

export default OperatorButton;