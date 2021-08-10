import React from "react";
import '../styles.scss';

class PercentButton extends React.Component {
  onTrigger(event) {
    this.props.handlePercent();
    event.preventDefault();
  }
  
  render() {
    return (
      <div id="percent-div">
        <input type="button" id="percent-btn" value={this.props.value} onClick={this.onTrigger.bind(this)}/>
      </div>
    );
  }
}

export default PercentButton;