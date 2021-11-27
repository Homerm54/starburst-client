// Check https://gist.github.com/sw-yx/f18fe6dd4c43fddb3a4971e80114a052#file-createctx-usereducer-tsx
// Application Management Getter / Setter https://kentcdodds.com/blog/application-state-management-with-react
import Console from "lib/Console";
import React, { createContext } from "react"

// Type declarations and Interfaces
type AppState = {
  theme:  'ligth' | 'dark'
  loading: boolean,
};
 
type Action =
  | { type: 'initialSetup' }
  | { type: 'toggleTheme' }

type GlobalContext = { state: AppState, dispatch: React.Dispatch<Action> };

// Constants and initial values
const localStorageKey = 'appSettings';
const initialState: AppState = {
  theme: 'dark',
  loading: false,
};


// Local Functions
const saveSettings = (state: AppState) => {
  try {
    return localStorage.setItem(localStorageKey, JSON.stringify(state));
  } catch (error) {
    // In case there's an error, just ignore
    Console.error(error);
  }
};

const loadSettings = (defaultState: AppState) => {
  try {
    const settings = localStorage.getItem(localStorageKey);
    return settings? JSON.parse(settings) as AppState : defaultState;
  } catch (error) {
    // In case there's an error loading the settings, defaults are ok
    Console.error(error);
    return defaultState;
  }
}

function reducer(state: AppState, action: Action): AppState {
  Console.log(action);
  switch (action.type) {
    case 'toggleTheme': {
      const newState: AppState = { ...state, theme: state.theme === 'ligth' ? 'dark' : 'ligth' }
      saveSettings(newState);
      return newState;
    }
    default:
      throw new Error('Invalid Action passed');
  }
}

// ---------- Context Creation - Provider
const AppCtx = createContext<GlobalContext | null>(null);

function useGlobalContext(): GlobalContext {
  const c = React.useContext(AppCtx);
  if (!c) throw new Error("Global Context must be inside a Provider with a value");
  return c;
}
  
function GlobalProvider(props: { children?: React.ReactNode }) : JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState, loadSettings);
  return <AppCtx.Provider value={{state, dispatch}} {...props} />
}

export {useGlobalContext, GlobalProvider };
