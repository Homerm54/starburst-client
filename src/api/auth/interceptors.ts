import { AxiosInstance, AxiosRequestConfig } from "axios";
import { axios } from 'api/fetcher';
import Console from "lib/Console";
import { AuthService } from ".";
import { ErrorCodesThatRequireRefresh, AuthorizartionErrorCodes } from "./server-errors";
import { refreshAccessToken } from "./functions";

/** Add authentication header, **if present** to all the requests */
const authHeader = (instance: AuthService) => (config: AxiosRequestConfig<any>) => {
  if (!instance.accessToken) return config;
  if (!config.headers) config.headers = {};
  config.headers.Authorization = `Bearer ${instance.accessToken}`;
  return config;
};

const errorInterceptor = (instance: AuthService, axios: AxiosInstance) =>
  async (error: any): Promise<unknown> => {
    const originalConfig = error.config;
    Console.error(error.response, originalConfig);

    if (!error.response) return Promise.reject(error);
    if (originalConfig._retry || !instance.refresh_token) {
      // Already retried or not refresh token, better ask for log in again
      instance.accessToken = null;
      instance.refresh_token = null;
      return Promise.reject(error);
    }

    // Check error code to see if corresponding with Auth Business
    if (ErrorCodesThatRequireRefresh.includes(error.response.data.code)) {
      originalConfig._retry = true;
      const [access_token, refresh_token] = await refreshAccessToken(instance.refresh_token);
      originalConfig.headers.Authorization = access_token;
      instance.refresh_token = refresh_token;
      instance.accessToken = access_token;

      return axios(originalConfig);
    }

    if (AuthorizartionErrorCodes.INVALID_REFRESH_TOKEN === error.response.data.code) {
      instance.accessToken = null;
      instance.refresh_token = null;
      return Promise.reject(error);
    }

    // Default case, return error since the error code provided isn't related to core auth
    return Promise.reject(error);
  };

/**
 * Set up the interceptors needed to handle Authentication realated features.
 * This interceptors adds the required headers, intercept errors and retry them 
 * as needed.
 * 
 * @param module The Authentication module to where this interceptors are binded, 
 * and thus, from where specific functions and props will be taken on.
 */
function setupInterceptors(module: AuthService): void {
  axios.interceptors.request.use(authHeader(module));
  axios.interceptors.response.use(undefined, errorInterceptor(module, axios));
}

export { setupInterceptors };
