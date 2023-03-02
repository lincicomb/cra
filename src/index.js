import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// inject <style> tag
let style = document.createElement('style');
const root = ReactDOM.createRoot(document.getElementById('widget'));
style.textContent = cssText;
root.appendChild(style);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);