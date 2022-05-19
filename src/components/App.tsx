import { ThemeProvider } from 'assets/style/ThemeProvider';
import GlobalStyle from 'assets/style/global';
import { dark as darktheme, light as lighttheme } from 'assets/style/theme';
import { Loading } from 'components/ui';
import { useGlobalContext } from './shared/context';
import { useEffect, useState } from 'react';
import Console from 'lib/Console';
import api from 'api';
import ScreenSizeWatcher from 'components/ScreenSizeWatcher';
import { ErrorBoundary } from './ErrorBoundary';
import RouteRenderer from 'router/RouteRenderer';

import 'assets/icons/faIcons';

function App(): JSX.Element {
  const context = useGlobalContext();
  const [initialLoading, setInitialLoading] = useState(true);
  
  const initApp = () => {
    setInitialLoading(true);
    api.build()
      .then(() => {
        if (!api.isAPIOnline) throw new Error("API not online!");
        Console.log(`Auth state: ${api.auth.isSignedIn}`);
      })
      .catch((error) => {
        Console.error(error);
        throw new Error(error);
      })
      .finally(() => setInitialLoading(false));
  };
  useEffect(initApp, []);

  return (
    <ThemeProvider theme={context.state.theme === 'dark' ? darktheme : lighttheme}>
      <GlobalStyle />

      <ErrorBoundary>
        {
          initialLoading
            ? <Loading global hint="Reaching server..." />
            : (
              <>
                <ScreenSizeWatcher />
                <RouteRenderer />
              </>
            )
        }
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
