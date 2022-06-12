import React from 'react';

let fruits = [
  { id: 'apple', value: '🍎 apple' },
  { id: 'orange', value: '🍊 orange' },
  { id: 'grape', value: '🍇 grape' },
  { id: 'pear', value: '🍐 pear' },
];

function handleClick(name) {
  alert(name);
}

function Btn(props) {
  return <button onClick={() => handleClick(props.id)}>{props.value}</button>;
}

function Fruits() {
  return (
    <div>
      <h2>5. Fruits name</h2>
      {fruits.map((fruit, i) => (
        <Btn key={i} {...fruit} />
      ))}
    </div>
  );
}

export default Fruits;
