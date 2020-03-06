import React, { Component } from "react";

import "./Home.scss";
// import { TextButton } from "../components/Buttons";
import { TextInput } from "../components/Inputs";

import Player, { Ronaldo, Messi, PlayerPerformance } from "../models/player";
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

  renderPerformance = (
    performance1: PlayerPerformance,
    performance2: PlayerPerformance
  ) => {
    return Object.keys(performance1).map((perfKey: string, index) => {
      const [value1, value2] = [performance1[perfKey], performance2[perfKey]];

      return (
        <div key={index} className="score">
          <p className="title">{perfKey.toUpperCase()}</p>
          <div className="values">
            <span>{value1}</span>
            <PerformanceBar value={value1} />
            <PerformanceBar right={false} value={value2} />
            <span>{value2}</span>
          </div>
        </div>
      );
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
          {this.renderPerformance(player1.mainDetails, player2.mainDetails)}
        </div>
      </div>
    );
  }
}
