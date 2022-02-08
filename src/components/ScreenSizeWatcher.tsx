import { breakpoints } from "assets/style/theme";
import Console from "lib/Console";
import { useEffect, useState } from "react";

const ScreenSizeWatcher = (): JSX.Element | null => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  useEffect(() =>{
    // Catch any media query changes here
    const mql = window.matchMedia(`(max-width: ${breakpoints[1]})`);
    const watcher = () => {
      Console.log('Media Qeury watcher fired');
      setIsSmallScreen(mql.matches);
    }

    mql.addEventListener('change', watcher);
    watcher();

    return () => mql.removeEventListener('change', watcher);
  }, []);

  if (isSmallScreen) {
    Console.log('Is in small screen');
    // Show modal here
    return null;
  }

  Console.log('Is in big screeeen');

  return null;
}


export default ScreenSizeWatcher;
