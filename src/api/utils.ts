import axiosBase from 'axios';
import Console from 'lib/Console';
import { variables } from 'lib/config';

const baseURL = false //variables.devMode
  ? `http://localhost:${variables.BACKEND_PORT}`
  : variables.BACKEND_URL
;

/**
 * Custom axios instance with all the pre configuration needed.
 * TODO: Add access token refresh interceptor
 * TODO: Add offline interceptor
 */
const axios = axiosBase.create({
  baseURL,
  responseType: 'json', // Default response type from api, if other, specify in the request call
  headers: {
    'Content-Type': 'application/json', // Default payload, if other specify in call
  }
});


/**
 * Checks if the API is active and ready to be used (in case Heroku put it to sleep, 
 * for example).
 * @returns Whether the API endpoint is active and ready to be used
 */
export const checkAPIStatus = async (): Promise<boolean> => axios
  .get('/status')
  .then((res) => {
    if (res.data.ok) return true;
    return false;
  })
  .catch((error) => {
    if (!navigator.onLine) {
      Console.log('Browser offline, starting backup mode');
      return false;
    } else {
      Console.error(error);
      if (error.response) {
        Console.log('Server response not in 200 range');
      } else {
        Console.log('The request was made but no response was received');
      }
      return false;
    }
  });
