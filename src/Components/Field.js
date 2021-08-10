import React from "react";
import '../styles.scss'

class Field extends React.Component {
  render() {
    return (
      <div id="field-div">
        <h1 id="field">{this.props.value}</h1>
      </div>
    );
  }
}

export default Field;