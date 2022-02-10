import { breakpoints } from "assets/style/theme";
import Console from "lib/Console";
import { useEffect, useState } from "react";
import Modal from "components/ui/Modal";

const ScreenSizeWatcher = (): JSX.Element => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  useEffect(() =>{
    // Catch any media query changes here
    const mql = window.matchMedia(`(max-width: ${breakpoints[1]})`);
    const watcher = () => {
      Console.log('Media Qeury watcher fired');
      setIsSmallScreen(mql.matches);
    };

    mql.addEventListener('change', watcher);
    watcher();

    return () => mql.removeEventListener('change', watcher);
  }, []);

  return (
    <Modal
      display={isSmallScreen}
      closable={true}
      footer={null}
    >
      <div>Sorry, but this app isn&apos;t available for small screens</div>
    </Modal>
  );
};


export default ScreenSizeWatcher;
