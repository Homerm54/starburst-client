/**
 * @file Authentication Related Services Available for the Client
 * @author Omer Marquez <omer.marquezt@gmail.com>
 * 
 * This file containts all the authentication related services, functions, methods and configurations
 * needed to keep the client connected to the API.
 * 
 * ## Tokens
 * API authentication and authorizations are based on tokens, hence, this module and the methods implemented
 * are "token based". Basically two types or tokens are handled, Access Tokens and Refresh Tokens.
 * 
 * The access token is the token send in the authorization headers of the request, and are the one validated by
 * the auth service, is short lived ans saved **in memory** to avoid compromising it to 3rd party users. The 
 * refresh token is the token used to get a new access token once it expires, this token is used in what's 
 * known as **silent authentication**, generation a new access - refresh token pair each time we hit the auth
 * system.
 * 
 * The API implements a token rotation system, detecting reused tokens, thus, is safe to store the refresh token
 * in the localstorage, and use it to reauthenticate the user when a new tab is openned, or the browser is oppened
 * again. The long life of the refresh token allows keeping the user signed as long as teh refresh token hasn't
 * expired., which ultimately depends on the auth system in the API.
 * 
 * In case no refresh token, or expired one, a sign in is required, usgin email + password as credentials. In a
 * second iteration of the systema, 2 factor must be added.
 * 
 * ## Axios
 * Since Axions is the connection between API and client, the interceptors provided by the library are the one
 * configured to intercept an unauthorized request, and check if what's needed is a new access token and retry
 * the request.
 * 
 * @see {@link https://axios-http.com/docs/interceptors} Official Interceptors Documentation
 * @see {@link https://www.bezkoder.com/axios-interceptors-refresh-token/} This post for configuring them for refresh token
 * @see folder: design/auth for code flows and diagrams about the authentication logic
 * 
 * ## TODOS
 * 
 * @todo Check if using service workers improve in some way the interation between tabs
 * @todo Check how to use 2 factor authentication
 */

export { };