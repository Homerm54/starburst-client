import axiosBase from 'axios';
import Console from 'lib/Console';

// Check https://axios-http.com/
const endpoint = process.env.REACT_APP_API_URL;
if (!endpoint) throw Error('No backend endpoint, check .env file');

const axios = axiosBase.create({
  baseURL: endpoint,
  responseType: 'json', // Default response type, if other, specify in the request call
  // timeout: ?
  // timeoutErrorMessage ?
});

// const offlineInterceptor = axios.interceptors.


/**
 * // Decorators can be used to check if a api call is failed due to network errors
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
