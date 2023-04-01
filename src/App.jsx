import React from "react";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const click = (e) => {
    setResult(result.concat(e.target.id));
  };

  const clear = () => {
    setResult("");
  };

  const deleteElement = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    }catch (e) {
      setResult("Inválido");
    }
  };

  return (
    <div className="calculator bg-[#023047] w-80 mx-auto mt-10 p-4 rounded-lg shadow-lg">
      <input className="result w-full text-right py-1 px-5" type="text" value={result} disabled placeholder="0" />

      <div className="btns grid grid-cols-4 gap-y-4 gap-x-3 mt-4">
        <button className="operator" onClick={clear}>AC</button>
        <button className="operator" onClick={deleteElement}>DEL</button>

        <button id="." className="operator" onClick={click}>.</button>
        <button id="/" className="operator" onClick={click}>/</button>

        <button id="7" className="number" onClick={click}>7</button>
        <button id="8" className="number" onClick={click}>8</button>
        <button id="9" className="number" onClick={click}>9</button>
        <button id="*" className="operator" onClick={click}>*</button>

        <button id="4" className="number" onClick={click}>4</button>
        <button id="5" className="number" onClick={click}>5</button>
        <button id="6" className="number" onClick={click}>6</button>
        <button id="-" className="operator" onClick={click}>-</button>

        <button id="1" className="number" onClick={click}>1</button>
        <button id="2" className="number" onClick={click}>2</button>
        <button id="3" className="number" onClick={click}>3</button>
        <button id="+" className="operator" onClick={click}>+</button>

        <button id="00" className="operator" onClick={deleteElement}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="rotate(180 12 12)"><path fill="currentColor" d="M6.535 3H21a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6.535a1 1 0 0 1-.832-.445l-5.333-8a1 1 0 0 1 0-1.11l5.333-8A1 1 0 0 1 6.535 3zm.535 2l-4.666 7l4.666 7H20V5H7.07zM13 10.586l2.828-2.829l1.415 1.415L14.414 12l2.829 2.828l-1.415 1.415L13 13.414l-2.828 2.829l-1.415-1.415L11.586 12L8.757 9.172l1.415-1.415L13 10.586z"/></g></svg></button>
        <button id="0" className="number" onClick={click}>0</button>
        <button id="=" className="operator col-span-2" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default App
