import axios from "axios";
import { convertDataToPlayer } from "../models/player";

const url = "/api/fut";

/**
 * Search for `Player` with the specified `playerName`
 *
 * @param playerName
 */
export const searchPlayer = async (playerName: string) => {
  try {
    const data = (await axios.get(`/api/${playerName}`)).data.data;
    const player = convertDataToPlayer([data])[0];
    return player;
  } catch (e) {
    // todo
    return undefined;
  }
};
