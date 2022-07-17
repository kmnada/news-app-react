/**
 * SetStorageItem takes a key and a value and sets the key to the value in localStorage.
 * @param key - The key to store the value under.
 * @param value - The value to be stored.
 */
export const setStorageItem = (key, value) => {
  localStorage.setItem(key, value);
};

/**
 * Get the value of the item in local storage with the key that matches the key argument.
 * @param key - The key of the item you want to get from localStorage.
 */
export const getStorageItem = (key) => localStorage.getItem(key);

/**
 * It removes a key from localStorage
 * @param key - The key of the item you want to remove from local storage.
 */
export const removeStorageItem = (key) => localStorage.removeItem(key);

/**
 * It returns the username of the currently logged in user
 */
export const getUser = () => localStorage.getItem('user').split('@')[0];
