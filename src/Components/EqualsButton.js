import React from "react";

class EqualsButton extends React.Component {
  render() {
    return (
      <div>
        <input type="button" value={this.props.value} onClick={this.props.handleEquals}/>
      </div>
    );
  }
}

export default EqualsButton;