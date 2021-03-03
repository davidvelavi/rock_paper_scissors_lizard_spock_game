import React from 'react';
import '../assets/styles/components/Alerts.scss';

const Alerts = ({ message, handleClick }) => {
  return (
    <div className='Alerts'>
      <p className='Alerts-Message'>
        {message}
      </p>
      <button
        className='Alerts-Button'
        onClick={handleClick}
        type='button'
      >
        Jugar de nuevo
      </button>
    </div>
  );
};

export default Alerts;
