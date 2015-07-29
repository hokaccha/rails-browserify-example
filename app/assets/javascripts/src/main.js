import 'core-js';
import React from 'react';
import AppComponent from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  React.render(React.createElement(AppComponent), document.getElementById('app'));
});
