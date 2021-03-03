import { faHandRock, faHandPaper, faHandScissors, faHandSpock, faHandLizard } from '@fortawesome/free-solid-svg-icons';
import { v4 } from 'uuid';

export default {
  defaultHands: [{
    icon: faHandRock,
    hand: 'rock',
    key: v4(),
  }, {
    icon: faHandPaper,
    hand: 'paper',
    key: v4(),
  }, {
    icon: faHandScissors,
    hand: 'scissors',
    key: v4(),
  }, {
    icon: faHandSpock,
    hand: 'spock',
    key: v4(),
  }, {
    icon: faHandLizard,
    hand: 'lizard',
    key: v4(),
  },
  ],
  scorePlayer: 0,
  scoreCPU: 0,
  playing: true,
};
