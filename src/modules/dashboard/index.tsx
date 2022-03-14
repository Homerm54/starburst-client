import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "api";
import { ActionMenu, Breadcrums, Col, Container, ContextMenu, FileTree, Row, Typography } from "components/ui";
import { TreeData } from "components/ui/FileTree/types";
import Console from "lib/Console";
import { sleep } from "lib/sleep";
import { useEffect, useState } from "react";

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
            key: 'a',
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
            key: '2',
            name: 'Subfolder #4',
            type: 'folder',
            subfolders: [
              { 
                key: '121', 
                name: 'Folder A', 
                type: 'folder', 
                subfolders: [], 
                metadata: {
                  created_at: new Date(),
                  updated_at: new Date(), 
                },
              },
              { 
                key: 'f', 
                name: 'Folder asd2', 
                type: 'folder', 
                subfolders: [
                  {
                    key: '.saw2',
                    name: 'Subfolder Code',
                    type: 'folder',
                    subfolders: [
                      {
                        key: 'FFF',
                        name: 'Subfolder F',
                        type: 'folder',
                        subfolders: [],
                        metadata: {
                          created_at: new Date(),
                          updated_at: new Date(),
                          size: 234e6
                        }
                      },
                      {
                        key: '2-wda-0',
                        name: 'Subfolder Final',
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
            ],
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

async function deriveData(keys: Array<string>): Promise<{ folder: TreeData[], path: string[] }> {
  // await sleep(3000);

  const path: Array<string> = [];
  let folder = baseData;
  let notfound = false;
  
  keys.forEach((key) => {
    if (key === '1') throw new Error('Testing error here');

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
  const [data, setData] = useState<Array<TreeData>>([]);
  // Current key where the user is positioned, same as path, but keys deep, each key is a folder inside
  const [keys, setKeys] = useState<Array<string>>([]);

  // States that might end up derived
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // ContextMenu
  const [menuState, setMenuState] = useState({ show: false, x: 0, y: 0 });

  const handleToHome = () => {
    setData(baseData);
    setPath([]);
    setKeys([]);
  };
  
  const onFileSelect = (key: string) => {
    Console.log(`Selected file with key: ${key}`);
  };

  const handleFolderChange = async (key: string) => {
    setLoading(true);

    try {
      Console.log(`Key selected: ${key}`);
      const keyPath = [...keys, key];

      // [TODO:] redundancy here? bugs sometimes here
      const newData = await deriveData(keyPath);
      setData(newData.folder);
      setPath(newData.path);
      setKeys(keyPath);
    } catch (error) {
      setError(true);
      // TODO:
    } finally {
      setLoading(false);
    }
  };

  const onBack = async () => {
    setLoading(true);

    try {
      const keyPath = [...keys];
      keyPath.pop();

      const newData = await deriveData(keyPath);
      if (!newData) {
      // TODO: Bugs here some times, show empty folder
        alert('Invalid folder path');
      } else {
        setData(newData.folder);
        setPath(newData.path);
        setKeys(keyPath);
      }
    } catch (error) {
      setError(true);
      // TODO:
    } finally {
      setLoading(false);
    }
  };

  const handleBreadcrum = async (ix: number) => {
    setLoading(true);

    try {
      const keyPath = keys.slice(undefined, ix + 1);
      Console.log(ix, keyPath);
      const newData = await deriveData(keyPath);

      if (!newData) {
        alert('Invalid folder path');
      } else {
        setData(newData.folder);
        setPath(newData.path);
        setKeys(keyPath);
      }
    } catch (error) {
      setError(true);
      // TODO:
    } finally {
      setLoading(false);
    }
  };

  const loader = async () => {
    await sleep(3000);
    setKeys([]);
    setPath([]);
    setData(baseData);
    setLoading(false);
  };

  useEffect(() => {
    loader();

    return () => {
      setData([]);
      setKeys([]);
      setPath([]);
      setLoading(true);
    };
  }, []);
  
  const createNewFile = () => Console.log('Creating new file');
  const createNewFolder = () => Console.log('Creating new folder');
  const uploadFile = () => Console.log('Uploading file');

  const showContextMenu = (key: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    Console.log(`Rigth clicked component: ${key} | at x: ${e.pageX} - y: ${e.pageY}`);
    if (!e.shiftKey) {
      e.preventDefault();
      setMenuState({ show: true, x: e.pageX, y: e.pageY });
    }
  };

  const onMenuClose = () => setMenuState({ show: false, x: 0, y: 0 });


  // Should refresh relative to the current directory, not from parent
  const refreshDirectory = async () => {
    Console.log('Refreshing directory');
    setLoading(true);
    setError(false);
    await sleep(3000);

    loader();
  };
  
  return(
    <Container maxWidth="lg" style={{ margin: 'auto' }}>
      <ContextMenu
        show={menuState.show}
        onClose={onMenuClose}
        position={{ x: menuState.x, y: menuState.y }}
      >
        <ActionMenu
          showName="inline"
          orientation="vertical"
          tools={[
            { icon: <FontAwesomeIcon icon="plus" />, name: 'Create new file', onClick: createNewFile },
            { icon: <FontAwesomeIcon icon="folder-plus" />, name: 'Create new folder', onClick: createNewFolder },
            { icon: <FontAwesomeIcon icon="upload" />, name: 'Upload file', onClick: uploadFile },
            { icon: <FontAwesomeIcon icon="arrows-rotate" />, name: 'Refresh directory list', onClick: refreshDirectory },
          ]}
        />

        <Typography variant="body1" className="text-muted mx-4">
          CTRL + SHIFT to show browser menu
        </Typography>
      </ContextMenu>

      <div className="mx-4">
        <Row className="mb-2">
          <Col xs={8}>
            <Breadcrums
              home
              maxItems={3}
              data={path}
              separator="/"
              onHome={handleToHome}
              onSelection={handleBreadcrum}
            />
          </Col>

          <Col xs={4}>
            <ActionMenu
              fullWidth
              tools={[
                { icon: <FontAwesomeIcon icon="plus" />, name: 'Create new file', onClick: createNewFile },
                { icon: <FontAwesomeIcon icon="folder-plus" />, name: 'Create new folder', onClick: createNewFolder },
                { icon: <FontAwesomeIcon icon="upload" />, name: 'Upload file', onClick: uploadFile },
                { icon: <FontAwesomeIcon icon="arrows-rotate" />, name: 'Refresh directory list', onClick: refreshDirectory },
              ]}
            />
          </Col>
        </Row>

        <FileTree
          error={error}
          loading={loading}
          data={data}
          onBack={onBack}
          backEntry={keys.length > 0} // Avoid showing back on home folder
          onFileSelect={onFileSelect}
          onContextMenu={showContextMenu}
          onFolderSelect={handleFolderChange}
        />
      </div>
    </Container>
  );
}

export default FileExplorer;
