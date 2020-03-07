import axios from "axios";
import { convertDataToPlayer } from "../models/player";

const url = "https://www.easports.com/fifa/ultimate-team/api/fut";

export const searchPlayer = async (playerName: string) => {
  try {
    const data = (await axios.get(`${url}/item?name=${playerName}`)).data[0];
    const player = convertDataToPlayer(data);
    return player;
  } catch (e) {
    // todo
    return undefined;
  }
};
