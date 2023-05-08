import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');

  function handleButtonClick(event) {
    const value = event.target.value;
    setInput(input + value);
  }

  function handleClearButtonClick() {
    setInput('');
  }

  function handleEqualsButtonClick() {
    const result = eval(input);
    setInput(result.toString());
  }

  return (
    <div>
      <input type="text" value={input} />
      <div>
        <button value="1" onClick={handleButtonClick}>1</button>
        <button value="2" onClick={handleButtonClick}>2</button>
        <button value="3" onClick={handleButtonClick}>3</button>
        <button value="+" onClick={handleButtonClick}>+</button>
      </div>
      <div>
        <button value="4" onClick={handleButtonClick}>4</button>
        <button value="5" onClick={handleButtonClick}>5</button>
        <button value="6" onClick={handleButtonClick}>6</button>
        <button value="-" onClick={handleButtonClick}>-</button>
      </div>
      <div>
        <button value="7" onClick={handleButtonClick}>7</button>
        <button value="8" onClick={handleButtonClick}>8</button>
        <button value="9" onClick={handleButtonClick}>9</button>
        <button value="*" onClick={handleButtonClick}>*</button>
      </div>
      <div>
        <button value="0" onClick={handleButtonClick}>0</button>
        <button value="." onClick={handleButtonClick}>.</button>
        <button onClick={handleClearButtonClick}>C</button>
        <button onClick={handleEqualsButtonClick}>=</button>
        <button value="/" onClick={handleButtonClick}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
