import React from "react";

class DecimalButton extends React.Component {
  render() {
    return (
      <div id="decimal-div">
        <input type="button" id="decimal-btn" value={this.props.value} onClick={this.props.handleDecimal}/>
      </div>
    );
  }
}

export default DecimalButton;