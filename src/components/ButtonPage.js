import React from 'react';

const ButtonPage = ({ children, onClick, isDisabled }) => {
  let style;

  if (isDisabled) {
    style = 'disabled';
  }

  return (
    <div className='button-container'>
      <button className={style} disabled={isDisabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default ButtonPage;
