export const getSearchTermFromQueryString = (queryString: any) => {
  return new URLSearchParams(queryString).get("query") || "";
};
