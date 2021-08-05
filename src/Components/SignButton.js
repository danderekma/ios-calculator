import React from "react";

class SignButton extends React.Component {
  onTrigger(event) {
    this.props.handleSign();
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

export default SignButton;