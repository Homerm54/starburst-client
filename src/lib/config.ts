/**
 * Load the enviroment variable named `varName` from the .env file, or throws an error if not found.
 * This avoids using a `undefined` when variable is not in file. Hence, if missing variable, the code
 * won't even load and start, avoiding crashing at runtime because of `undefined` used instead of string.
 *
 * @param {string} varName The name of the variable inside the enviroment variable file.
 * @returns {string} The value of the variable.
 */
const getEnvVariable = (varName: string) => {
  const variable = process.env[varName];
  if (!variable)
    throw Error(`Missing enviroment variable ${varName}. Check .env file`);

  return variable;
};

/**
 * Enviroment Variables, all the values inside this object are subject to change
 * depending on the .env file
 */
const variables = {
  PORT: process.env.PORT || 3000,
  devMode: process.env.NODE_ENV === 'development',
  BACKEND_URL: getEnvVariable('REACT_APP_API_URL'),
  BACKEND_PORT: process.env.REACT_APP_BACKEND_PORT || 5000,
};

export { variables };
