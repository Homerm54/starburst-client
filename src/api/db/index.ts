/**
 * This file holds all the **client side** database libs that are used to support
 * offline activity, and keeps sessions.
 */
import localforage from "localforage";

const AuthenticationKey = 'starburst:auth';

const authDB = localforage.createInstance({
  name: 'starburst',
  storeName: 'auth',
  version: 1,
  description: `
    Database store to save the authentication details, like user data (email, profile pic), 
    tokens, emails, authentication methods, and keep track of how the session that's currently
    active started.
  `,
});


export { authDB, AuthenticationKey };
