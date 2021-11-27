/* eslint-disable no-console */
const inDevMode = process.env.NODE_ENV === 'development';


/**
 * Console Wrapper to avoid logging in production mode.
 * @author Omer Marquez <omer.marquezt@gmail.com>
 */
const Console = {
  log: inDevMode ? console.log : function(){},
  error: inDevMode ? console.error : function(){},
  debug: inDevMode ? console.debug : function(){},
}



export default Console;