import Cookie from 'js-cookie';

const CheckUserLoggedIn = () => Cookie.get('access_token');

export default CheckUserLoggedIn;