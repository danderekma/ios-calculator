import React from "react";

class NumberButton extends React.Component {
  onTrigger(event) {
    this.props.handleNumInput(this.props.value);
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

export default NumberButton;