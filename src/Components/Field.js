import React from "react";

class Field extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.value}</h1>
      </div>
    );
  }
}

export default Field;