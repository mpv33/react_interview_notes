import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


document.addEventListener('mousemove', function (e) {
  let body = document.querySelector('body');
  let circle = document.createElement('span');
  circle.classList.add('bubble');
  let x = e.offsetX;
  let y = e.offsetY;
  circle.style.left = x + "px";
  circle.style.top = y + "px";
  let size = Math.random() * 100;
  circle.style.width = 10 + size + "px";
  circle.style.height = 10 + size + "px";
  if (body) {
    body.appendChild(circle);
    setTimeout(function () {
      circle.remove();
    }, 1800);
  }

});