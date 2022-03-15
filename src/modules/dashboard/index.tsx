import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import api from "api";
import { useFileExplorerState } from "components/FileExplorer/reducer";
import { ActionMenu, Breadcrums, Col, Container, ContextMenu, FileTree, Row, Typography } from "components/ui";
import { TreeData } from "components/ui/FileTree/types";
import Console from "lib/Console";
import { sleep } from "lib/sleep";
import { useEffect, useState } from "react";

function FileExplorer(): JSX.Element {
  const [state, dispatch] = useFileExplorerState();
  const [menuState, setMenuState] = useState<ContextManagerState>({
    key: null,
    x: 0, y: 0,
    show: false,
  });
  const { path, data, keys, loading, error } = state;

  const handleToHome = () => {
    dispatch({ type: 'SET_DATA', payload: { data: baseData } });
  };
  
  const onFileSelect = (key: string) => {
    Console.log(`Selected file with key: ${key}`);
  };

  const loadMoreData = async (keyPath: string[]) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const newData = await deriveData(keyPath);
      dispatch({
        type: 'SET_DATA',
        payload: {
          data: newData.folder,
          path: newData.path,
          keys: keyPath,
        }
      });
    } catch (error) {
      dispatch({ type: 'SET_ERROR' });
    }
  };

  const handleFolderChange = async (key: string) => {
    const keyPath = [...keys, key];
    loadMoreData(keyPath);
  };

  const onBack = async () => {
    const keyPath = [...keys];
    keyPath.pop();
    loadMoreData(keyPath);
  };

  const handleBreadcrum = async (ix: number) => {
    const keyPath = keys.slice(undefined, ix + 1);
    loadMoreData(keyPath);
  };

  useEffect(() => {
    // Initial Loader
    sleep(3000) // Mockup of data fetching
      .then(() => dispatch({ type: 'SET_DATA', payload: { data: baseData } }));

    return () => {
      dispatch({ type: 'RESET' });
      setMenuState({ show: false, x: 0, y: 0, key: null });
    };
  }, []);
  
  // MENU CONTEXT SECTION
  const renameItem = () => { Console.log(`Renaming item with key: ${menuState.key}`); onMenuClose(); };
  const createNewFolder = () => { Console.log(`Creating new folder with key: ${menuState.key}`); onMenuClose(); };
  const uploadFile = () => { Console.log(`Uploading file with key: ${menuState.key}`); onMenuClose(); };
  const deleteFile = () => { Console.log(`Deleting file with key: ${menuState.key}`); onMenuClose(); };
  const createNewMarkdown = () => { Console.log(`Creating markdown here with key: ${menuState.key}`); onMenuClose(); };

  // Should refresh relative to the current directory, not from parent
  const refreshDirectory = async () => {
    Console.log('Refreshing directory');
    dispatch({ type: 'RESET' });
    await sleep(3000);
    loadMoreData(keys);
  };

  const showContextMenu = (key: string, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    Console.log(`Rigth clicked component: ${key} | at x: ${e.pageX} - y: ${e.pageY}`);
    if (!e.shiftKey) {
      e.preventDefault();
      setMenuState({ show: true, x: e.pageX, y: e.pageY, key });
    }
  };

  const onMenuClose = () => setMenuState({ show: false, x: 0, y: 0, key: null });
  // END MENU CONTEXT SECTION
  
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
            { icon: <FontAwesomeIcon icon="pencil" />, name: 'Rename Item', onClick: renameItem },
            { icon: <FontAwesomeIcon icon="upload" />, name: 'Upload file', onClick: uploadFile },
            { icon: <FontAwesomeIcon icon="trash" />, name: 'Delete file', onClick: deleteFile },
            { icon: <FontAwesomeIcon icon="folder-plus" />, name: 'Create new folder', onClick: createNewFolder },
            { icon: <FontAwesomeIcon icon={['fab', 'markdown']} className="text-info" />, name: 'Create new Markdown File', onClick: createNewMarkdown },
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
              entries={path}
              separator="/"
              onHome={handleToHome}
              onSelection={handleBreadcrum}
            />
          </Col>

          <Col xs={4}>
            <ActionMenu
              fullWidth
              tools={[
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


// [UTILS] Mock up data and util functions

type ContextManagerState = { show: boolean, x: number, y: number, key: string | null };

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
