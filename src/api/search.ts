import axios from "axios";
import { convertDataToPlayer } from "../models/player";

/**
 * Search for `Player` with the specified `playerName`
 *
 * @param playerName
 */
export const searchPlayer = async (playerName: string) => {
  try {
    const data = (
      await axios.get(
        `https://skyblazar-server.herokuapp.com/soccer-vs/api/${playerName}`
      )
    ).data.data;
    const player = convertDataToPlayer([data])[0];
    return player;
  } catch (e) {
    // todo
    return undefined;
  }
};
