import React, { Component } from "react";

import "./Home.scss";
// import { TextButton } from "../components/Buttons";
import { TextInput } from "../components/Inputs";

import Player, { Ronaldo, Messi, PlayerPerformance } from "../models/player";
import PerformanceBar from "../components/PerformanceBar";
import PlayerInfo from "../components/PlayerInfo";
import { searchPlayer } from "../api/search";
import Spinner from "../components/Spinner";

interface HomeState {
  player1Name: string;
  player2Name: string;
  player1: Player | undefined;
  player2: Player | undefined;
  loadingPlayer1: boolean;
  loadingPlayer2: boolean;
  resize: number;
  layoutOverflow: boolean;
}

export default class Home extends Component<any, Readonly<HomeState>> {
  state = {
    player1Name: "",
    player2Name: "",
    player1: undefined,
    player2: undefined,
    loadingPlayer1: false,
    loadingPlayer2: false,
    resize: Number.MIN_SAFE_INTEGER,
    layoutOverflow: false
  };

  componentDidMount() {
    if (window.innerWidth <= 900) {
      this.setState({ layoutOverflow: true });
    }

    window.addEventListener("resize", () => {
      const layoutOverflow = window.innerWidth <= 900 ? true : false;

      this.setState({
        resize: this.state.resize + 1,
        layoutOverflow
      });
    });
  }

  componentWillMount() {
    window.removeEventListener("resize", () => {});
  }

  onChange1 = (e: any) => {
    this.setState({
      player1Name: e.target.value
    });
  };

  onChange2 = (e: any) => {
    this.setState({
      player2Name: e.target.value
    });
  };

  renderPerformance = (
    performance1: PlayerPerformance,
    performance2: PlayerPerformance
  ) => {
    return Object.keys(performance1).map((perfKey: string, index) => {
      const [value1, value2] = [performance1[perfKey], performance2[perfKey]];
      const { resize } = this.state;

      return (
        <div key={index} className="score">
          <p className="title">{perfKey.toUpperCase()}</p>
          <div className="values">
            <span>{value1}</span>
            <PerformanceBar value={value1} resize={resize} />
            <PerformanceBar right={false} value={value2} resize={resize} />
            <span>{value2}</span>
          </div>
        </div>
      );
    });
  };

  onSubmit1 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.setState({ loadingPlayer1: true });

    searchPlayer(this.state.player1Name).then(player => {
      if (player)
        this.setState({ player1: player, resize: this.state.resize + 1 });

      this.setState({ loadingPlayer1: false });
    });
  };

  onSubmit2 = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.setState({ loadingPlayer2: true });

    searchPlayer(this.state.player2Name).then(player => {
      if (player)
        this.setState({ player2: player, resize: this.state.resize + 1 });

      this.setState({ loadingPlayer2: false });
    });
  };

  render() {
    const {
      player1 = Ronaldo,
      player2 = Messi,
      layoutOverflow,
      loadingPlayer1,
      loadingPlayer2
    } = this.state;

    return (
      <div className="home">
        <header>
          <form className="form" onSubmit={this.onSubmit1}>
            <TextInput
              type="text"
              name="player1Name"
              placeholder="Ronaldo"
              onChange={this.onChange1}
            />
            {loadingPlayer1 && <Spinner />}
          </form>

          <form className="form" onSubmit={this.onSubmit2}>
            <TextInput
              type="text"
              name="player2Name"
              placeholder="Messi"
              onChange={this.onChange2}
            />
            {loadingPlayer2 && <Spinner />}
          </form>
        </header>

        <div className="vs">
          <div className="left">
            <h1>
              <span style={{ color: "#d43861" }}>{player1.name}</span>
            </h1>
            <div className="club">
              <img src={player1.club.imageUrl} alt="Club" />
              <h3>{player1.club.name}</h3>
            </div>
            <img src={player1.headshot} alt="Player1" />
          </div>

          <div className="right">
            <h1>
              <span style={{ color: "#b6a6ec" }}>{player2.name}</span>
            </h1>
            <div className="club">
              <h3>{player2.club.name}</h3>
              <img src={player2.club.imageUrl} alt="Club" />
            </div>
            <img src={player2.headshot} alt="Player2" />
          </div>
        </div>

        <div
          className="combine"
          style={{
            justifyContent: layoutOverflow ? "center" : undefined
          }}
        >
          {!layoutOverflow && (
            <PlayerInfo
              player={player1}
              style={{
                marginRight: "2em"
              }}
            />
          )}
          <div className="performance">
            {this.renderPerformance(player1.mainDetails, player2.mainDetails)}
          </div>
          {!layoutOverflow && (
            <PlayerInfo
              player={player2}
              style={{
                marginLeft: "2em"
              }}
            />
          )}
        </div>

        {layoutOverflow && (
          <div className="combine combine-small">
            <PlayerInfo
              player={player1}
              style={{
                marginRight: "2em"
              }}
            />

            <PlayerInfo
              player={player2}
              style={{
                marginLeft: "2em"
              }}
            />
          </div>
        )}
      </div>
    );
  }
}
