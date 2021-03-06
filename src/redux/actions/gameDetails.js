import axios from 'axios';
import { getGameDetails, getGameScreenshots } from '../../api';

export const loadGameDetails = (id) => async (dispatch) => {
  const [game, screenshots] = await Promise.all([
    axios.get(getGameDetails(id)),
    axios.get(getGameScreenshots(id)),
  ]);

  dispatch({
    type: 'GET_DETAILS',
    payload: {
      game: game.data,
      screenshots: screenshots.data.results,
    },
  });
};
