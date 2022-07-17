/**
 * LoggerMiddleware is a function that returns a function that takes a function that takes an action
 * and returns a function that takes an action.
 */
const LoggerMiddleware = () => (next) => (action) => {
  console.log('action', action);
  next(action);
};

export default LoggerMiddleware;
