import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div className="xpto">
        <App />
        <App />
        <App />
    </div>, document.getElementById('root'));
registerServiceWorker();