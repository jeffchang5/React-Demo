import App from './containers/App/app';
import React from 'react';
import ReactDOM from 'react-dom';
import reqBuilder from './utils/reqBuilder';

// const requestBody = new reqBuilder(
//   "Mitochondria is the Powerhouse of the Cell” is an expression describing the function of mitochondria organelles found in the cells of eukaryote organisms. On Tumblr, the phrase is typically mocked as an example of impractical information taught in public schools.",
//   14);
// requestBody.makeRequest();

ReactDOM.render(<App />, document.getElementById('container'));
