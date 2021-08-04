import React from "react";

class DecimalButton extends React.Component {
  render() {
    return (
      <div>
        <input type="button" value={this.props.value} onClick={this.props.handleDecimal}/>
      </div>
    );
  }
}

export default DecimalButton;