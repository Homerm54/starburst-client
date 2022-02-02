import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { GlobalProvider } from 'components/shared/context';
import { printWelcomeMessage } from 'lib/Console';

printWelcomeMessage();

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
