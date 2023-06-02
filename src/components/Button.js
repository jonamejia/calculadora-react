import React from 'react';
import '../stylesheets/button.css'

function Button(props) {

  const isOperator = valor  => {//Comparamos si es un numero, si el valor es distinto a un . y =
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  }

  if(isOperator(props.children)) {

    return (
      <button
        className='container-button operator'
        onClick={() => props.driveClick(props.children)}>
        {props.children}
      </button>
    );

  } else {

    return (
      <button
        className='container-button'
        onClick={() => props.driveClick(props.children)}>
        {props.children}
      </button>
    );

  }


}

export default Button;