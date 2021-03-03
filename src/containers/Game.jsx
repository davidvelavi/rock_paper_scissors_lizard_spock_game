import React, { useContext, useState, useEffect, useRef } from 'react';
import Hand from '../components/Hand';
import Score from '../components/Score';
import Alerts from '../components/Alerts';
import '../assets/styles/containers/Game.scss';
import AppContext from './ContextProvider';
import rules from '../rules';

const Game = () => {
  const { state, updateScorePlayer, updateScoreCPU, updateGameState } = useContext(AppContext);
  const { defaultHands, playing, scoreCPU, scorePlayer } = state;
  const [cpuHand, setCpuHand] = useState({});
  const [message, setMessage] = useState('');

  const [notifier, setNotifier] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    if (playing) {
      timer.current = setInterval(() => {
        setNotifier((v) => v + 1);
      }, 100);
    }
  }, [playing]);

  useEffect(() => {
    if (notifier < 5) {
      setCpuHand(defaultHands[notifier]);
    } else {
      setNotifier(0);
    }
  }, [notifier]);

  useEffect(() => {
    if (scoreCPU || scorePlayer) {
      updateGameState(false);
    }
  }, [scoreCPU, scorePlayer]);

  const handleClick = ({ hand: player }) => {
    let message = '';
    const cpuPlayer = cpuHand.hand;
    if (player === cpuPlayer) {
      message = 'Empataste';
    } else if (rules[cpuPlayer].includes(player)) {
      message = 'Ganaste';
      updateScorePlayer(1);
    } else {
      message = 'Perdiste';
      updateScoreCPU(1);
    }
    setMessage(message);
    clearTimeout(timer.current);

  };
  const restartGame = () => {
    updateGameState(true);
  };

  return (
    <div className='Game'>
      <Score />
      <div className='Game-Board'>
        <div className='Game-CPU'>
          {
            Object.keys(cpuHand).length && <Hand hand={cpuHand} />
          }
        </div>

        {
          !playing && <Alerts message={message} handleClick={restartGame} />
        }

        <div className='Game-Player'>
          {
            defaultHands && defaultHands.map((hand) => (
              <Hand key={hand.key} hand={hand} handleClick={handleClick} />
            ))
          }
        </div>

      </div>

    </div>
  );
};

export default Game;
