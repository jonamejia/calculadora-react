import React from 'react';
import '../stylesheets/buttonClear.css';

const ButtonClear = (props) => {
  return (
    <div className='clear' onClick={props.driveClick}>
      {props.children}
    </div>
  );
}

export default ButtonClear;