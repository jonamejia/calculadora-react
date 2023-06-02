import './App.css';
import logo from './image/logo512.png';
import Button from './components/Button';
import Screen from './components/Screen';
import ButtonClear from './components/ButtonClear'
import { useState } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = value => {
    setInput(input + value);
  }

  const calculateRes = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('please enter the values ​to perform the calculations')
    }

  }

  return (
    <div className="App">
      <div className='container-logo'>
        <img
          src={logo}
          className='logo-react'
          alt='Logo' />
      </div>

      <div className='calculator-container'>
        <Screen
          inputs={input} />
        <div className='row'>
          <Button driveClick={agregarInput}>7</Button>
          <Button driveClick={agregarInput}>8</Button>
          <Button driveClick={agregarInput}>9</Button>
          <Button driveClick={agregarInput}>*</Button>

        </div>

        <div className='row'>
          <Button driveClick={agregarInput}>4</Button>
          <Button driveClick={agregarInput}>5</Button>
          <Button driveClick={agregarInput}>6</Button>
          <Button driveClick={agregarInput}>-</Button>
        </div>

        <div className='row'>
          <Button driveClick={agregarInput}>1</Button>
          <Button driveClick={agregarInput}>2</Button>
          <Button driveClick={agregarInput}>3</Button>
          <Button driveClick={agregarInput}>+</Button>
        </div>

        <div className='row'>
          <Button driveClick={calculateRes}>=</Button>
          <Button driveClick={agregarInput}>0</Button>
          <Button driveClick={agregarInput}>.</Button>
          <Button driveClick={agregarInput}>/</Button>
        </div>

        <div className='row'>
          <ButtonClear driveClick={() => setInput('')}>
            Clear
          </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
