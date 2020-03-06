import React, { Component } from "react";

import "./Home.scss";
// import { TextButton } from "../components/Buttons";
import { TextInput } from "../components/Inputs";

import Player, { Ronaldo, Messi } from "../models/player";
import PerformanceBar from "../components/PerformanceBar";

interface HomeState {
  player1Name: string;
  player2Name: string;
  player1: Player | undefined;
  player2: Player | undefined;
}

export default class Home extends Component<any, Readonly<HomeState>> {
  state = {
    player1Name: "",
    player2Name: "",
    player1: undefined,
    player2: undefined
  };

  onChange = (e: any) => {
    this.setState({
      player1Name: e.target.value
    });
  };

  render() {
    const { player1 = Ronaldo, player2 = Messi } = this.state;

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
            <div className="club">
              <img src={player1.club.imageUrl} alt="Club" />
              <h3>{player1.club.name}</h3>
            </div>
            <img src={player1.headshot} alt="Player1" />
          </div>

          <div className="right">
            <h1>{player2.name}</h1>
            <div className="club">
              <h3>{player2.club.name}</h3>
              <img src={player2.club.imageUrl} alt="Club" />
            </div>
            <img src={player2.headshot} alt="Player2" />
          </div>
        </div>

        <div className="performance">
          <PerformanceBar />
        </div>
      </div>
    );
  }
}
