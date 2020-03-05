import React, { Component } from "react";

import "./Home.scss";
import { TextButton } from "../components/Buttons";
import { TextInput } from "../components/Inputs";

interface Player {
  name: string;
  club: {
    name: string;
    imageUrl: string;
  };
  imageUrl: string;
  height: number;
  weight: number;
  age: number;
  mainDetails: {
    skillMoves: number;
    crossing: number;
    curve: number;
    dribbling: number;
    freeKickAccuracy: number;
    composure: number;
  };
}

export default class Home extends Component {
  state = {
    player1Name: "",
    player2Name: "",
    player1: {} as Player,
    player2: {} as Player
  };

  onChange = (e: any) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { player1, player2 } = this.state;

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

        <div className="vs">
          <div className="left">
            <h1>{player1.name}</h1>
            <h3>{player1.club}</h3>
            <img src={player1.imageUrl} alt="Player1" />
          </div>

          <div className="right">
            <h1>{player2.name}</h1>
            <h3>{player2.club}</h3>
            <img src={player2.imageUrl} alt="Player2" />
          </div>
        </div>
      </div>
    );
  }
}
