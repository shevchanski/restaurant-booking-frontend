/**
 * An array of routes which are publicly accessible
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ['/'];

/**
 * An array of routes which are used to authenticate user
 *	These routes will redirect logged in user to /settings
 * @type {string[]}
 */
export const authRoutes = ['/login', '/signup'];

export const DEFAULT_LOGIN_REDIRECT = '/';
