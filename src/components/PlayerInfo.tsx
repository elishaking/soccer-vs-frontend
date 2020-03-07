import React, { useState } from "react";

import "./PlayerInfo.scss";
import Player from "../models/player";
import { TextButton } from "./Buttons";

interface PlayerInfoProps {
  player: Player;
  style: React.CSSProperties;
}

export default function PlayerInfo({ player, style }: PlayerInfoProps) {
  const [expanded, setExpanded] = useState(false);

  const getAge = (birthDate: string) => {
    const date = new Date(birthDate);

    return ((Date.now() - date.getTime()) / 31536000000).toFixed(0);
  };

  const toggleExpandInfo = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="player-info" style={style}>
      <div className="info">
        <h3>WEIGHT</h3>
        <h2>
          {player.moreInfo.weight} <span>kg</span>
        </h2>
      </div>

      <div className="info">
        <h3>HEIGHT</h3>
        <h2>
          {player.moreInfo.height} <span>cm</span>
        </h2>
      </div>

      <div className="info">
        <h3>AGE</h3>
        <h2>
          {getAge(player.birthdate)} <span>years</span>
        </h2>
      </div>

      {expanded && (
        <div className="more">
          {Object.keys(player.moreInfo).map((infoKey, index) => {
            return (
              <div key={index} className="info">
                <h3>{infoKey.toUpperCase()}</h3>
                <h2>{player.moreInfo[infoKey]}</h2>
              </div>
            );
          })}
        </div>
      )}

      <TextButton
        text={expanded ? "Less" : "More"}
        outline={true}
        style={{
          color: "white",
          borderColor: "white",
          display: "block",
          margin: "auto",
          marginTop: "2em"
        }}
        onClick={toggleExpandInfo}
      />
    </div>
  );
}
