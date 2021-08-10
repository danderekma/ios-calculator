import React from "react";
import '../styles.scss';

class EqualsButton extends React.Component {
  render() {
    return (
      <div id="equals-div">
        <input type="button" id="equals-btn" value={this.props.value} onClick={this.props.handleEquals}/>
      </div>
    );
  }
}

export default EqualsButton;