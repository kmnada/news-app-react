import Cookie from 'js-cookie';

export const getCookie = (key) => Cookie.get(key);

export const setCookie = (key, value) => Cookie.set(key, value);
