import { fileStorageDB, FileStorageKey } from 'api/db';
import { axios } from 'api/fetcher';
import { AxiosRequestConfig } from 'axios';
import Console from 'lib/Console';
import { FileStorageError } from './client-errors';
import { DBData, DropboxBindArgs, FileStorageUserData } from './types';


/**
 * TODO: documentation here
 */
class FileStorageService {
  private session: DBData | null = null;

  constructor() {
  }

  // [TOKEN METHODS]
  private async updateToken() {
    try {
      const res = await axios.post('/file-service/refresh-service-token');
      await this.updateSession({ tokens: { access_token: res.data.access_token } });
    } catch (error) {
      console.error(error);
      // TODO: Handle error here
    }
  }

  private async updateSession(value: Partial<DBData>) {
    // Value will override all the keys of data, hence, updating as needed
    const newData = { ...this.session, ...value, updated_at: new Date() };
    
    this.session = newData as DBData; // Updates session in memory
    await fileStorageDB.setItem(FileStorageKey, newData); // And update session in local storage
  }
  // [END OF SECTION]
  

  // [ACCOUNT SECTION]
  /** TODO: Documentation here */
  account = {
    async activateAccount({ code }: DropboxBindArgs): Promise<void> {
      const res = await axios.post('/file-service/finish-auth-flow', { code });
      Console.log(res.data);
    },

    async getAccountMetrics(): Promise<FileStorageUserData> {
      const res = await axios.get('/file-service/account-data');
      return { ...res.data, active: true };
    }
  };
  // [END OF SECTION]

  // [RAW FILE SERVICE SECTION]
  /** TODO: Documentation here */
  fileSystem = {
    async searchPath(path: string) {
      const res = await axios.get('/file-service/folder', { headers: { 'File-Storage-Args': path } });
      return res.data;
    },

    async uploadFile(file: File, path: string) {
      const form = new FormData();
      form.append('File', file);

      await axios.post('/file-service/upload', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'File-Storage-Args': path,
        }
      });
    },

    async deleteFile(path: string) {
      await axios.delete(`/file-service/item`, { headers: { 'File-Storage-Args': path } });
    }
  };
  // [END OF SECTION]

  async init(): Promise<void> {
    // await check session database
    await fileStorageDB.ready(); // Wait for the database to be ready
    this.session = await fileStorageDB.getItem(FileStorageKey);
    await this.updateToken(); // Refresh token is stored in server, no need to session

    axios.interceptors.request.use(FileStorageService.authHeader(this));
    axios.interceptors.response.use(undefined, FileStorageService.errorInterceptor(this));
  }

  // ---------- [INTERCEPTORS] Interceptors for the axios instance
  static errorInterceptor = (instance: FileStorageService) => async function (error: any): Promise<unknown> {
    const originalConfig = error.config;
    Console.error(error.response, originalConfig);

    if (!error.response) return Promise.reject(error);
    if (originalConfig._retry || !instance.session) {
      // Already retried or no refresh token, better ask for sign in again
      return Promise.reject(error);
    }

    // Check error code to see if corresponding with Auth Business
    if (FileStorageError.isRefreshError(error.response.data.code)) {
      originalConfig._retry = true;
      await instance.updateToken();
      return axios(originalConfig);
    }

    // Default case, return error since the error code provided isn't related to core auth
    return Promise.reject(error);
  };

  /** Add authentication header, **if present** to all the requests */
  static authHeader = (instance: FileStorageService) => function (config: AxiosRequestConfig<any>) {
    if (!instance.session?.tokens.access_token) return config;
    if (!config.headers) config.headers = {};
    config.headers['File-Service-Authorization'] = `Bearer ${instance.session.tokens.access_token}`;
    return config;
  };
  // ---------- [END OF INTERCEPTORS]
}

export { FileStorageService };
