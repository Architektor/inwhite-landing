import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

require('smoothscroll-polyfill').polyfill();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
