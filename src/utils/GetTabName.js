const routes = {
  '/home': 0,
  '/world': 1,
  '/science': 2,
  '/search': 3
};

/**
 * It takes a path and returns the corresponding tab name
 * @param path - The path of the current route.
 * @returns The value of the key in the routes object that matches the path argument.
 */
const getTabName = (path) => routes[path];
export default getTabName;
