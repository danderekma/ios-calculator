import React from "react";
import '../styles.scss'

class ClearButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clearState: "AC"
    }
  }
  onTrigger(event) {
    this.props.handleClear();
    event.preventDefault();
  }

  render() {
    return (
      <input type="button" id="clear-btn" value={this.props.value} onClick={this.onTrigger.bind(this)}/>
    );
  }
}

export default ClearButton;