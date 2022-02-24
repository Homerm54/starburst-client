import Console from "lib/Console";
import { useEffect, useState } from "react";
import { Modal } from "components/ui";
import { useTheme } from "styled-components";

const ScreenSizeWatcher = (): JSX.Element => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const theme = useTheme();
  
  useEffect(() =>{
    // Catch any media query changes here
    const mql = window.matchMedia(`(max-width: ${theme.breakpoints.values.sm}px)`);
    const watcher = () => {
      Console.log('Media Query watcher fired');
      setIsSmallScreen(mql.matches);
    };

    mql.addEventListener('change', watcher);
    watcher();

    return () => mql.removeEventListener('change', watcher);
  }, []);

  return (
    <Modal
      title="Web app not available"
      display={isSmallScreen}
      closable={false}
      footer={null}
    >
      <div>Sorry, but this app isn&apos;t available for small screens</div>
    </Modal>
  );
};


export default ScreenSizeWatcher;
