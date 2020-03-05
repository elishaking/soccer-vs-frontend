import React, { Component } from "react";
import { TextButton } from "../components/Buttons";
import { TextInput } from "../components/Inputs";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <TextButton text="Click" />
        <TextInput type="text" placeholder="Player name" onChange={() => {}} />
      </div>
    );
  }
}
