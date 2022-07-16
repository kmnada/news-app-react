export const formattedSearchResults = (results) => {
    const stories = results.map((result) => ({
        ...result,
        section: result.section_name,
        title: result?.headline?.main,
        byline: result?.byline?.original
    }));
    return stories;
}