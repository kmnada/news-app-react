export const setStorageItem = (key, value) => {
  localStorage.setItem(key, value);
};

export const getStorageItem = (key) => localStorage.getItem(key);

export const removeStorageItem = (key) => localStorage.removeItem(key);

export const getUser = () => localStorage.getItem('user').split('@')[0];
