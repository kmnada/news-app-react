import { getStorageItem, getUser, setStorageItem } from './LocalStorageUtil';

const handleSearchValues = (searchWord) => {
  const user = getUser();
  const recentSearches = getRecentSearches();
  const searchObject = {
    value: recentSearches.length + 1,
    label: searchWord
  };
  recentSearches.unshift(searchObject);
  if (recentSearches.length > 5) {
    recentSearches.pop();
  }
  setStorageItem(`${user}_search_history`, JSON.stringify(recentSearches));
};

export default handleSearchValues;

export const getRecentSearches = () => {
  const user = getUser();
  const searchValues = getStorageItem(`${user}_search_history`);
  return searchValues ? JSON.parse(searchValues) : [];
};
