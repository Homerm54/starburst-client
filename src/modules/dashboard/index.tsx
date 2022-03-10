import api from "api";
import { Breadcrums, Container, FileTree } from "components/ui";
import { TreeData } from "components/ui/FileTree/types";
import Console from "lib/Console";
import { useState } from "react";

// Base data that will be fetched by the api
// TODO: Match this more to the data returned by dropbox, just check to see
const baseData: Array<TreeData> = [
  { 
    key: '1', 
    name: 'Folder 1', 
    type: 'folder', 
    subfolders: [], 
    metadata: {
      created_at: new Date(),
      updated_at: new Date(), 
    },
  },
  { 
    key: '2', 
    name: 'Folder 2', 
    type: 'folder', 
    subfolders: [
      {
        key: '21',
        name: 'Subfolder #1',
        type: 'folder',
        subfolders: [
          {
            key: '21',
            name: 'Subfolder #3',
            type: 'folder',
            subfolders: [],
            metadata: {
              created_at: new Date(),
              updated_at: new Date(),
              size: 234e6
            }
          },
          {
            key: '20',
            name: 'Subfolder #4',
            type: 'folder',
            subfolders: [],
            metadata: {
              created_at: new Date(),
              updated_at: new Date(),
              size: 234e6
            }
          },
        ],
        metadata: {
          created_at: new Date(),
          updated_at: new Date(),
          size: 234e6
        }
      },
      {
        key: '20',
        name: 'Subfolder #2',
        type: 'folder',
        subfolders: [],
        metadata: {
          created_at: new Date(),
          updated_at: new Date(),
          size: 234e6
        }
      },
    ], 
    metadata: {
      created_at: new Date(),
      updated_at: new Date() 
    },
  },
  { 
    key: '3', 
    name: 'File #1.md', 
    type: 'text/markdown', 
    metadata: {
      created_at: new Date(),
      updated_at: new Date(), 
      size: 12366432
    } 
  },
];

// [TODO: RE DO THIS] This is a base algorith, but might be prom to error and migth not work well
// with really nested folders, check out.
// Does the work, but not as good as it can be
function getFolder(key: string, data: Array<TreeData>) {
  return data.find((item) => item.key === key) || false;
}

function deriveData(keys: Array<string>): { folder: TreeData[], path: string[] } {
  const path: Array<string> = [];
  let folder = baseData;
  let notfound = false;
  
  keys.forEach((key) => {
    if (!notfound) {
      const f = getFolder(key, folder);
      if (f) {
        folder = f.subfolders || [];
        path.push(`/${f.name}`);
      } else {
        notfound = true;
      }
    }
  });

  return { folder, path: notfound ? [] : path };
}

function FileExplorer (): JSX.Element {
  // Current path where the user is positioned, each entry is a folder deep (just name of files).
  const [path, setPath] = useState<Array<string>>([]);
  // Current folder shown (files and subfolders)
  const [data, setData] = useState(baseData);
  // Current key where the user is positioned, same as path, but keys deep, each key is a folder inside
  const [keys, setKeys] = useState<Array<string>>([]);
  
  const handleToHome = () => {
    setData(baseData);
    setPath([]);
  };
  
  Console.log(path);

  const onFileSelect = (key: string) => {
    Console.log(`Selected file with key: ${key}`);
  };

  const handleFolderChange = (key: string) => {
    Console.log(`Key selected: ${key}`);
    const keyPath = [...keys, key];

    // [TODO:] redundancy here? bugs sometimes here
    const newData = deriveData(keyPath);
    setData(newData.folder);
    setPath(newData.path);
    setKeys(keyPath);
  };

  const onBack = () => {
    const keyPath = [...keys];
    keyPath.pop();

    const newData = deriveData(keyPath);
    if (!newData) {
      // TODO: Bugs here some times, show empty folder
      alert('Invalid folder path');
    } else {
      setData(newData.folder);
      setPath(newData.path);
      setKeys(keyPath);
    }
  };

  const handleBreadcrum = (ix: number) => {
    const keyPath = keys.slice(undefined, ix + 1);
    Console.log(ix, keyPath);
    const newData = deriveData(keyPath);
    if (!newData) {
      alert('Invalid folder path');
    } else {
      setData(newData.folder);
      setPath(newData.path);
      setKeys(keyPath);
    }
  };


  return(
    <Container maxWidth="lg" style={{ margin: 'auto' }}>
      <Breadcrums
        home
        data={path}
        separator="/"
        onHome={handleToHome}
        onSelection={handleBreadcrum}
      />

      <FileTree
        data={data}
        onBack={onBack}
        onFileSelect={onFileSelect}
        onFolderSelect={handleFolderChange}
      />
    </Container>
  );
}

export default FileExplorer;
