import React, { Component } from "react";
import { TextButton } from "../components/Buttons";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <TextButton text="Click" />
      </div>
    );
  }
}
