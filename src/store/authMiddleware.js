import { getCookie } from '../utils/CookieUtil';
import { refreshToken } from './config/api';

/**
 * "If the token is expired, refresh it, then dispatch the action."
 * The first thing we do is check if the token is expired. If it is, we call refreshToken, which is a
 * function that will refresh the token. If the token is not expired, we just dispatch the action
 * @returns A function that takes dispatch as an argument and returns a function that takes next as an
 * argument and returns a function that takes action as an argument and returns a promise.
 */
const AuthMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (!isTokenExpired()) {
      return refreshToken(dispatch).then((value) => {
        if (value) {
          next(action);
        }
      });
    } else {
      next(action);
    }
  };

export default AuthMiddleware;

/**
 * If the access_token cookie is set, return true, otherwise return false
 */
const isTokenExpired = () => getCookie('access_token');
