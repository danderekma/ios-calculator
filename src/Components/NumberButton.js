import React from "react";
import '../styles.scss';

class NumberButton extends React.Component {
  onTrigger(event) {
    this.props.handleNumInput(this.props.value);
    event.preventDefault();
  }

  render() {
    return (
      <input type="button" id={this.props.num + "-btn"} value={this.props.value} onClick={this.onTrigger.bind(this)}/>
    );
  }
}

export default NumberButton;