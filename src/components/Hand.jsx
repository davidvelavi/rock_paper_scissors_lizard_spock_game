import React from 'react';
import '../assets/styles/components/Hand.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Hand = ({ hand, handleClick }) => {
  const { icon } = hand;
  return (
    <div
      role='button'
      tabIndex='0'
      className={`Hand ${hand.hand}`}
      onClick={() => {
        handleClick(hand);
      }}
    >
      {
        icon && <FontAwesomeIcon icon={icon} />
      }
    </div>
  );
};

export default Hand;
