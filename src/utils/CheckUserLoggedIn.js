import Cookie from 'js-cookie';

const CheckUserLoggedIn = () => {return Cookie.get('access_token');}

export default CheckUserLoggedIn;