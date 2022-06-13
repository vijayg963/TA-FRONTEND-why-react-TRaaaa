import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import App from './App';
import './stylesheet/index.css';

let container = document.getElementById('root');
// let root = createRoot(container);
// root.render(<App />);

ReactDOM.render(<App />, container);
