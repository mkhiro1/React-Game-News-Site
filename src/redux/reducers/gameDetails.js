const initState = { game: {}, screenshots: [] };

const gameDetailsReducer = (state = initState, { type, payload }) => {
  const { game, screenshots } = payload ?? {};

  switch (type) {
    case 'GET_DETAILS':
      return { ...state, game, screenshots };

    default:
      return state;
  }
};

export default gameDetailsReducer;
