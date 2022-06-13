import Button from './Button';
import { buttonTypes, buttonSize } from './buttonInfo';

import './style.css';

function App() {
  return (
    <>
      <div>
        <h1>React Button App</h1>
        <div>
          <button onClick={clickMe}>Click Me for alert</button>
        </div>

        <Button label='Click ME !' />
        <Button
          label='Click ME !'
          type={buttonTypes.SECONDARY}
          size={buttonSize.SMALL}
        />
        <Button
          label='Click ME !'
          type={buttonTypes.TERTIARY}
          size={buttonSize.LAGGE}
        />
        <Button />
        <Button />
      </div>
    </>
  );
}

function clickMe() {
  return alert('Hello React Button Component');
}

export default App;
