import React from "react";

import "./PlayerInfo.scss";
import Player from "../models/player";

interface PlayerInfoProps {
  player: Player;
}

export default function PlayerInfo({ player }: PlayerInfoProps) {
  const getAge = (birthDate: string) => {
    const date = new Date(birthDate);

    return ((Date.now() - date.getTime()) / 31536000000).toFixed(0);
  };

  return (
    <div className="player-info">
      <div className="info">
        <h3>WEIGHT</h3>
        <h2>
          {player.weight} <span>kg</span>
        </h2>
      </div>

      <div className="info">
        <h3>HEIGHT</h3>
        <h2>
          {player.height} <span>cm</span>
        </h2>
      </div>

      <div className="info">
        <h3>AGE</h3>
        <h2>
          {getAge(player.birthdate)} <span>years</span>
        </h2>
      </div>
    </div>
  );
}
