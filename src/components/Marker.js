import React from "react";
import shouldPureComponentUpdate from "react-pure-render/function";

import { MarkerStyle } from "./MarkerStyles.js";

export default class Marker extends React.Component {
  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return <div style={MarkerStyle}>{this.props.text}</div>;
  }
}
