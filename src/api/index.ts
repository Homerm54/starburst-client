import { checkAPIStatus } from "./utils";

/**
 * Dropbox link:
 * https://www.dropbox.com/oauth2/authorize?client_id=kif0d4fv1k8zfqa&token_access_type=offline&response_type=code
 */

class APIClass {
  // Should hold api state

  constructor() {
    
  }

  /**
   * Check if server online and endpoints are ready to be used, should be called
   * first to wake it up in case Heroku hibernate the application.
   * 
   * @return Whether server is active and ready to use or not
   */
  wakeUpServer = checkAPIStatus;
}

const api = new APIClass();
export default api;

