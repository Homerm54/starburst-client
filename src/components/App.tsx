import { ThemeProvider } from 'assets/style/ThemeProvider';
import GlobalStyle from 'assets/style/global';
import { dark as darktheme, light as lighttheme } from 'assets/style/theme';
import { Loading } from 'components/ui';
import { useGlobalContext } from './shared/context';
import { useEffect } from 'react';
import Console from 'lib/Console';
import api from 'api';
import ScreenSizeWatcher from 'components/ScreenSizeWatcher';
import { NetworkWatcher } from 'components/NetworkWatcher';
import { ErrorBoundary } from './ErrorBoundary';
import { useSafeState } from '@react-hookz/web';

import 'assets/icons/faIcons';
import RouteRenderer from 'router/RouteRenderer';

function App(): JSX.Element {
  const context = useGlobalContext();
  const [initialLoading, setInitialLoading] = useSafeState(true);
  
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
        <ScreenSizeWatcher />
        <NetworkWatcher />

        {
          initialLoading
            ? <Loading global hint="Reaching server..." />
            : <RouteRenderer />
        }
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
