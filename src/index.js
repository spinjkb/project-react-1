import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Welcome from './Welcome';
// ReactDOM.render(
//   <h1>Hi, world!</h1>,
//   document.getElementById('root')
// );
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }
// setInterval(tick, 1000);

ReactDOM.render(
  <Welcome name="jkb"/>,
  document.getElementById('root')
)
