import React from "react";

class DecimalButton extends React.Component {
  render() {
    return (
      <input type="button" id="decimal-btn" value={this.props.value} onClick={this.props.handleDecimal}/>
    );
  }
}

export default DecimalButton;