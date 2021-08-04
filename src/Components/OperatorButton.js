import React from "react";

class OperatorButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false
    }
    this.onTrigger = this.onTrigger.bind(this);
  }

  onTrigger(event) {
    this.props.handleOperation(this.props.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <input type="button" value={this.props.value} onClick={this.onTrigger}/>
      </div>
    );
  }
}

export default OperatorButton;