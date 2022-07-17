/**
 * It takes an array of objects, and returns a new array of objects with the same keys, but with
 * different values
 * @param results - the results from the API call
 * @returns An array of objects with the following properties:
 *   - section
 *   - title
 *   - byline
 */
export const formattedSearchResults = (results) => {
  const stories = results.map((result) => ({
    ...result,
    section: result.section_name,
    title: result?.headline?.main,
    byline: result?.byline?.original
  }));
  return stories;
};
