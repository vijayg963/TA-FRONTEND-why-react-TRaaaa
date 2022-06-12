import React from 'react';
import Fruits from './Fruits';

function Main() {
  return (
    <>
      <div className='main'>
        <h1>Add Event Listenr in React</h1>
        <div>
          <h2>1. Click button</h2>
          <button onClick={handleClick}>Click Me</button>
          <h2>2. Help desk</h2>
          <button onClick={helpClick}>How can I help you?</button>
          <div>
            <h2>3. Name button</h2>
            <button onClick={() => showName('Arya')}>Arya</button>
            <button onClick={() => showName('John')}>John</button>
            <button onClick={() => showName('Bran')}>Bran</button>
          </div>
          <PersonName />;
          <div>
            <Fruits />
          </div>
        </div>
      </div>
    </>
  );
}

class PersonName extends React.Component {
  render() {
    return (
      <div>
        <h2>4. class component</h2>
        <button onClick={() => showName('Arya')}>Arya</button>
        <button onClick={() => showName('John')}>John</button>
        <button onClick={() => showName('Bran')}>Bran</button>
      </div>
    );
  }
}

function showName(name) {
  return alert(`Hello ${name}`);
}

function helpClick() {
  let arr = [
    `To learn React use https://reactjs.org`,
    `React and ReactDOM works together`,
    `Babel helps in writing JSX`,
  ];
  arr.map((e) => alert(e));
}

function handleClick() {
  alert('Hello React Event');
}

export default Main;
