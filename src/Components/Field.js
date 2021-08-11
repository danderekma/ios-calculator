import React from "react";
import '../styles.scss'

class Field extends React.Component {
  render() {
    return (
      <h1 id="field">{this.props.value}</h1>
    );
  }
}

export default Field;