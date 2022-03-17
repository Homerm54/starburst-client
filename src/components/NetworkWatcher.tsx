import { useNetworkState, useUpdateEffect } from '@react-hookz/web';
import Console from 'lib/Console';
import { message } from './ui';

function NetworkWatcher(): null {
  const state = useNetworkState();
  
  useUpdateEffect(() =>{
    if (state.online) {
      message.info({ content: 'Client online' });
      Console.log(state);
    } else if (state.online === false) {
      message.error({ content: 'Client disconected, starting offline mode' });
    }
  }, [state.online]);
  
  return null;
}

export { NetworkWatcher };
