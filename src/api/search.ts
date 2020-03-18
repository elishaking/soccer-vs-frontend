import axios from "axios";
import { convertDataToPlayer } from "../models/player";
import logError from "../utils/logger";

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
  } catch (err) {
    // todo
    logError(err);
    return undefined;
  }
};
