import React from "react";

class ClearButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <input type="button" value={this.props.value} onClick={this.props.handleClear}/>
      </div>
    );
  }
}

export default ClearButton;