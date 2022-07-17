import { getStorageItem, getUser, setStorageItem } from './LocalStorageUtil';

/**
 * Function to set recent searches of a particular user
 * @param {*} searchWord
 */
const handleSearchValues = (searchWord) => {
  const user = getUser();
  let recentSearches = getRecentSearches();
  const searchObject = {
    value: recentSearches.length + 1,
    label: searchWord
  };
  recentSearches = recentSearches.filter(
    (recentSearch) => recentSearch.label !== searchObject.label
  );
  recentSearches.unshift(searchObject);
  if (recentSearches.length > 5) {
    recentSearches.pop();
  }
  setStorageItem(`${user}_search_history`, JSON.stringify(recentSearches));
};

export default handleSearchValues;

/**
 * Function to retrieve the recent search values
 * @returns Array of search values
 */
export const getRecentSearches = () => {
  const user = getUser();
  const searchValues = getStorageItem(`${user}_search_history`);
  return searchValues ? JSON.parse(searchValues) : [];
};
