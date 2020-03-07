import axios from "axios";
import { convertDataToPlayer } from "../models/player";

const url = "/api/fut";

export const searchPlayer = async (playerName: string) => {
  try {
    const data = (await axios.get(`${url}/item?name=${playerName}`)).data[0];
    const player = convertDataToPlayer([data])[0];
    return player;
  } catch (e) {
    // todo
    return undefined;
  }
};
