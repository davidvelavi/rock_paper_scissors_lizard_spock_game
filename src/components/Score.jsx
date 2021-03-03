import React, { useContext } from 'react';
import '../assets/styles/components/Score.scss';
import AppContext from '../containers/ContextProvider';

const Score = () => {
  const { state } = useContext(AppContext);
  const { scorePlayer, scoreCPU } = state;
  return (
    <div className='Score'>
      <div className='Score-Points'>{scorePlayer}</div>
      <div className='Score-Points'>{scoreCPU}</div>
    </div>
  );
};

export default Score;
