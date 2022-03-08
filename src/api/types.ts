import { AuthService } from "./auth";
import { FileStorageService } from "./file-storage";

interface APIInterface {
  /** 
   * Property to check whether the API is online or not.
   * Can be used to determine if the client can connect and performe task to the server.
   */
  isAPIOnline: boolean | undefined;
  /**
   * Check if server online and endpoints are ready to be used, should be called
   * first to wake it up in case Heroku hibernate the application.
   * 
   * @return Whether server is active and ready to use or not
   */
  checkStatus: () => Promise<boolean>;
  /** Instance of the Authetication service for the given application. */
  auth: AuthService;
  /** Instance of the File Storage service for the given application. */
  fileStorage: FileStorageService;
  /**
   * Build function to create, init, and run all the services offered by the server, hence,
   * this async function must be called before calling any other function, or service
   * specific functions, because under the hood, the build function inits the async tasks
   * that each service must execute to function correctly.
   * 
   * Client can wait for this function to finish, and then check the online status, auth
   * status, etc.
   */
  build: () => Promise<void>;
}

export type { APIInterface };
