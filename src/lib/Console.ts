/* eslint-disable no-console */
const inDevMode = process.env.NODE_ENV === 'development';


/**
 * Console Wrapper to avoid logging in production mode.
 * @author Omer Marquez <omer.marquezt@gmail.com>
 */
const Console = {
  log: inDevMode ? console.log : function () { },
  warn: inDevMode ? console.warn : function () { },
  error: inDevMode ? console.error : function(){},
  debug: inDevMode ? console.debug : function () { },
  dir: inDevMode ? console.dir : function () { },
};

/** Print a welcome message to console */
const printWelcomeMessage = (): void => {
  console.log(`
     ######  ########    ###    ########  ########  ##     ## ########   ######  ######## 
    ##    ##    ##      ## ##   ##     ## ##     ## ##     ## ##     ## ##    ##    ##    
    ##          ##     ##   ##  ##     ## ##     ## ##     ## ##     ## ##          ##    
     ######     ##    ##     ## ########  ########  ##     ## ########   ######     ##    
          ##    ##    ######### ##   ##   ##     ## ##     ## ##   ##         ##    ##    
    ##    ##    ##    ##     ## ##    ##  ##     ## ##     ## ##    ##  ##    ##    ##    
     ######     ##    ##     ## ##     ## ########   #######  ##     ##  ######     ##    
  `);
};

export { printWelcomeMessage };
export default Console;