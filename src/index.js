import { AppContainer } from 'react-hot-loader';
import { render } from 'react-dom';
import React from 'react';
import App from './js/App';

render(
  <AppContainer><App /></AppContainer>,
  document.getElementById('root')
);

if (module && module.hot) {
  module.hot.accept('./js/App', () => {
    render(
      <AppContainer>
        <App />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}