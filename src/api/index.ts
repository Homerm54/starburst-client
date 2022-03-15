import { axios, isAxiosError } from "./fetcher";
import { AuthService } from "./auth";
import { FileStorageService } from "./file-storage";
import Console from "lib/Console";
import { APIInterface } from "./types";
 
class APIClass implements APIInterface {
  // ---------- Properties
  isAPIOnline: boolean | undefined;
  
  // ---------- Methods
  async checkStatus(): Promise<boolean> {
    try {
      const res = await axios.get('/status');
      if (res.data.ok) return true;
      return false;
    } catch (error) {
      if (!navigator.onLine) {
        Console.log('Browser offline, starting backup mode');
        return false;
      } else {
        Console.error(error);
        if (isAxiosError(error)) {
          if (error.response) {
            Console.log('Server response not in 200 range');
          } else {
            Console.log('The request was made but no response was received');
          }
        }
        return false;
      }
    }
  }

  // ---------- Modules
  auth = new AuthService();
  fileStorage = new FileStorageService();

  // Build function
  async build(): Promise<void> {
    // Sleep to mock up api calls 
    this.isAPIOnline = await this.checkStatus();
    await this.auth.init();
    await this.fileStorage.init();
  }
}

const api = new APIClass();

export default api;
export { APIClass };
