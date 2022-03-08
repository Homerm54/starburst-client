import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { GlobalProvider } from 'components/shared/context';
import { printWelcomeMessage } from 'lib/Console';

printWelcomeMessage();

/**
 * Little side note on StrictMode worth mentioning:
 * 
 * The Strict Mode helps to the development, detecting possible nasty side effects,
 * unsafe renderings, and more.
 * This is done in part via double rendering the component inside the StrictMode tags,
 * as here, this means that the whole app will double render **oly in development**,
 * so, if a double console.log is seen, is because of this.
 * 
 * On the documentation says so, but isn't very specific nor showy enough.
 */

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
