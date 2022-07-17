import Cookie from 'js-cookie';

/**
 * It checks if the user is logged in by checking if the cookie has an api_key
 * @returns Cookie
 */
const CheckUserLoggedIn = () => {
  return Cookie.get('api_key');
};

export default CheckUserLoggedIn;
