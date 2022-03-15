// Types
/**
 * Types file, all the types, interfaces, and classes definitions that might
 * be needed on a global scope are here, to easy the imports.
 */

/** Error codes that the Token module can, and will throw */
type AuthErrorCodes =
  | 'pending-auth-flow'
  | 'missing-filestorage-access-token'
  | 'invalid-authentication-code'
  | 'invalid-filestorage-access-token'
  | 'invalid-filestorage-refresh-token'
  | 'filestorage-access-denied';

const authErrorCodeArray: Array<AuthErrorCodes> = [
  'pending-auth-flow',
  'missing-filestorage-access-token',
  'invalid-authentication-code',
  'invalid-filestorage-access-token',
  'invalid-filestorage-refresh-token',
  'filestorage-access-denied'
];

const tokenErrorRequiresRefresh = [
  'missing-filestorage-access-token',
  'invalid-authentication-code',
  'invalid-filestorage-access-token',
];

type FileOperationErrorCodes =
  | 'unable-to-download'
  | 'file_not_found'
  | 'file-too-large'
  | 'filestorage-too-many-request'
  | 'service-fatal-error';

const fileOperationErrorCodeArray: Array<FileOperationErrorCodes> = [
  'unable-to-download',
  'file_not_found',
  'file-too-large',
  'filestorage-too-many-request',
  'service-fatal-error',
];

export type ServiceErrorCodes = AuthErrorCodes | FileOperationErrorCodes;

export const FileStorageErrorCodes = {
  /** The user has not completed the authentication flow, and hence, there's missing data */
  PENDING_AUTH_FLOW: 'pending-auth-flow' as ServiceErrorCodes,

  /** The expected access token to interact with the API is not present in the headers */
  MISSING_ACCESS_TOKEN: 'missing-filestorage-access-token' as ServiceErrorCodes,

  /** The given authentication code is invalid or has expired */
  INVALID_AUTH_CODE: 'invalid-authentication-code' as ServiceErrorCodes,

  /** The access token used is invalid, either expired or malformed  */
  INVALID_ACCESS_TOKEN: 'invalid-filestorage-access-token' as ServiceErrorCodes,

  /** The refresh token has either expired, or is no longer valid */
  INVALID_REFRESH_TOKEN:
    'invalid-filestorage-refresh-token' as ServiceErrorCodes,

  /** The user or app doesn't has the permissions to perform the operations */
  ACCESS_DENIED: 'filestorage-access-denied' as ServiceErrorCodes,

  /** Request from this APP has been blocked temporarily */
  TOO_MANY_REQUEST: 'filestorage-too-many-request' as ServiceErrorCodes,

  /** A fatal or unexpected error ocurred */
  FATAL_ERROR: 'service-fatal-error' as ServiceErrorCodes,

  // File operation errors
  /** The payload of the operation is way too large to handle */
  FILE_TOO_LARGE: 'file-too-large' as ServiceErrorCodes,

  /** The requested file couldn't be found */
  FILE_NOT_FOUND: 'file_not_found' as ServiceErrorCodes,

  /** The requested file can't be downloaded, must use export */
  UNABLE_TO_DOWNLOAD: 'unable-to-download' as ServiceErrorCodes,
};

/** Custom Error Class, to ease check in catch statements  */
export class FileStorageError extends Error {
  readonly code: ServiceErrorCodes;

  constructor(codeArg: ServiceErrorCodes) {
    super();
    this.code = codeArg;
  }

  static isFileStorageAuthError(code: string): code is AuthErrorCodes {
    return authErrorCodeArray.includes(code as AuthErrorCodes);
  }

  static isFileStorageServicerError(code: string): code is AuthErrorCodes {
    return fileOperationErrorCodeArray.includes(code as FileOperationErrorCodes);
  }

  static isRefreshError(code: string): boolean {
    return tokenErrorRequiresRefresh.includes(code);
  }
}
