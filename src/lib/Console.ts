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

const logStyleMain = `
  font-family: Montserrat,sans-serif;
  font-size: 40px;
  text-align: center;
  padding: 16px;

  color: #444444;
  background: #FFFFFF;
  text-shadow: 1px 0px 1px #CCCCCC, 0px 1px 1px #EEEEEE, 2px 1px 1px #CCCCCC, 1px 2px 1px #EEEEEE, 3px 2px 1px #CCCCCC, 2px 3px 1px #EEEEEE, 4px 3px 1px #CCCCCC, 3px 4px 1px #EEEEEE, 5px 4px 1px #CCCCCC, 4px 5px 1px #EEEEEE, 6px 5px 1px #CCCCCC, 5px 6px 1px #EEEEEE, 7px 6px 1px #CCCCCC;
`;

const logStyleSecondary = `
  font-family: Montserrat,sans-serif;
  font-size: 20px;
`;

/** Print a welcome message to console */
const printWelcomeMessage = (): void => {
  console.log("%cStarburst welcomes you to the developer console!", logStyleMain);
  console.log("%cBe awere of selfxss attacks and other nasty things, be sure you know what you are doing\n", logStyleSecondary);
};

export { printWelcomeMessage };
export default Console;