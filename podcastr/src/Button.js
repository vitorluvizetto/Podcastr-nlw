import { useState } from 'react';

function Button({ text }) {
  const [counter, setCounter] = useState(1);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <>
      <span>{counter}</span>
      <button onClick={increment}>{text}</button>
      <br />
    </>
  )
}

export default Button;
