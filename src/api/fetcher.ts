/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosBase, { AxiosError } from 'axios';
import { variables } from 'lib/config';

const baseURL = variables.devMode
  ? `http://localhost:${variables.BACKEND_PORT}`
  : variables.BACKEND_URL
;

/**
 * Custom axios instance with all the pre configuration needed.
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
 * Custom Typeguard check to see if an error is an instance of the AxiosError type.
 * @param error The error that will be checked
 * @returns Whether or not the error provided is an instance of AxiosError
 */
function isAxiosError(error: unknown): error is AxiosError<any, any> {
  return axiosBase.isAxiosError(error);
}

export { axios, isAxiosError };
