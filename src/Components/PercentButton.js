import React from "react";

class PercentButton extends React.Component {
  onTrigger(event) {
    this.props.handlePercent();
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

export default PercentButton;