import React from "react";

class Field extends React.Component {
  render() {
    return (
      <h1>{this.props.value}</h1>
    );
  }
}

export default Field;