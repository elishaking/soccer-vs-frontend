import React, { Component } from "react";

import "./Home.scss";
import { TextButton } from "../components/Buttons";
import { TextInput } from "../components/Inputs";

export default class Home extends Component {
  state = {
    player1Name: "",
    player2Name: ""
  };

  onChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="home">
        <header>
          <TextInput
            type="text"
            name="player1Name"
            placeholder="Ronaldo"
            onChange={this.onChange}
          />

          <TextInput
            type="text"
            name="player2Name"
            placeholder="Messi"
            onChange={this.onChange}
          />
        </header>
      </div>
    );
  }
}
