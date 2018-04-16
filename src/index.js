import React from 'react';
import ReactDOM from 'react-dom';
import Flexible from './assets/js/commons/Flexible';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
