import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/container/App';

const wrapper = document.getElementById('contents');
wrapper ? ReactDOM.render(<App />, wrapper) : false;