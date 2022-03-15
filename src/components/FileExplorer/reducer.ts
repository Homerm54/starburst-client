import { TreeData } from "components/ui/FileTree/types";
import { useReducer } from "react";

type Actions = 
  | 'SET_DATA'
  | 'SET_ERROR'
  | 'SET_LOADING'
  | 'RESET'

interface action {
  type: Actions,
  payload?: { data?: Array<TreeData>, keys?: string[], path?: string[] }
}

type state = {
  /** Current path where the user is positioned, each entry is a folder deep (just name of files). */
  path: string[];
  /** Current key where the user is positioned, same as path, but keys deep, each key is a folder inside */
  keys: string[];
  /** Current folder shown (files and subfolders) */
  data: Array<TreeData>;
  /** Flag to indicate that an error ocurred in the FileExplorer */
  error: boolean;
  /** Flag to indicate that the file explorer is loading more data */
  loading: boolean;
}

const initialState: state = {
  path: [],
  keys: [],
  data: [],
  error: false,
  loading: true,
};

function reducer(state: state, action: action): state {
  const { type, payload } = action;

  switch (type) {    
  case 'SET_DATA':
    return {
      loading: false,
      error: false,
      data: payload?.data || [],
      keys: payload?.keys || [],
      path: payload?.path || [],
    };

  case 'RESET': return initialState;
  case 'SET_ERROR': return { ...state, error: true, loading: false };
  case 'SET_LOADING': return { ...state, error: false, loading: true };
    
  default:
    throw new Error("Invalid state passed");
  }
}

const useFileExplorerState = () => useReducer(reducer, initialState);

export { useFileExplorerState };
