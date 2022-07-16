const LoggerMiddleware = () => (next) => (action) => {
  console.log('action', action);
  next(action);
};

export default LoggerMiddleware;
