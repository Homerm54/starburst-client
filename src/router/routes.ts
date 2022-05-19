/**
 * MASTER ROUTER FILE
 * 
 * All the route related aspect of the projects are here, including routes definition, and
 * declaration of each component along with the metadata related to the route.
 */
import { lazy } from "react";

// AUTHENTICATION
const auth = lazy(() => import('modules/auth'));

// ACCOUNT SECTION
const account = lazy(() => import('modules/account/dashboard'));
const account_fileStorage = lazy(() => import('modules/account/file-storage'));
const management = lazy(() => import('modules/management'));

const fileExplorer = lazy(() => import('modules/dashboard'));



type route = {
  /** Human redable name of the route (to display in links, for exmaple) */
  name: string;
  /** The component to be lazy rendered */
  component: typeof auth;
  /** Whether or not the route is private (user must be signed in to see) */
  private: boolean;
  /** The route */
  route: string;
  /** Whether or not the path must match exactly */
  exact: boolean;
}

/** Declaration of **all** the routes used in the project */
const routes = {
  dashboard: '/',
  authentication: '/auth',
  management: '/management',
  accountModule: {
    index: '/account',
    fileStorage: '/account/file-storage',
  },
};

/** Array declaration of the routes */
const routes_array: Array<route> = [
  // AUTHENTICATION
  {
    name: 'Authenticate',
    exact: true,
    private: false,
    route: routes.authentication,
    component: auth,
  },

  // DASHBOARD
  {
    name: 'Dashboard',
    exact: true,
    private: true,
    route: routes.dashboard,
    component: fileExplorer,
  },

  // ACCOUNT SECTION
  {
    name: 'Account',
    component: account,
    private: true,
    route: routes.accountModule.index,
    exact: true,
  },
  {
    name: 'File Storage Settings',
    component: account_fileStorage,
    private: true,
    route: routes.accountModule.fileStorage,
    exact: true,
  },
  {
    name: 'Account Management',
    component: management,
    private: true,
    route: routes.management,
    exact: true,
  },
];

export default routes;
export { routes_array };
