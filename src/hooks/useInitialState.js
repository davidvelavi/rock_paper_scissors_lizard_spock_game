import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setstate] = useState(initialState);
  const updateScorePlayer = (payload) => {
    debugger;
    setstate({
      ...state,
      scorePlayer: state.scorePlayer + payload,
    });
  };
  const updateScoreCPU = (payload) => {
    debugger;
    setstate({
      ...state,
      scoreCPU: state.scoreCPU + payload,
    });
  };

  const updateGameState = (payload) => {
    debugger;
    setstate({
      ...state,
      playing: payload,
    });

  };

  return { state, updateScorePlayer, updateScoreCPU, updateGameState };
};

export default useInitialState;
