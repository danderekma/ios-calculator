import React from "react";
import '../styles.scss';

class SignButton extends React.Component {
  onTrigger(event) {
    this.props.handleSign();
    event.preventDefault();
  }
  
  render() {
    return (
      <div id="sign-div">
        <input type="button" id="sign-btn" value={this.props.value} onClick={this.onTrigger.bind(this)}/>
      </div>
    );
  }
}

export default SignButton;