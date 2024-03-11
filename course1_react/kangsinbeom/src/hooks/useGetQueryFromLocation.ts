import { useLocation } from "react-router-dom";
import { getSearchTermFromQueryString } from "../utils/getSearchTermQuryString";

const useGetQueryFromLocation = () => {
  const location = useLocation();
  return getSearchTermFromQueryString(location.search);
};

export default useGetQueryFromLocation;
