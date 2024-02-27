const getCurrentPageArray = (pageArray: number[], selectedPage: number) => {
  if (selectedPage <= 3) {
    return pageArray.slice(0, 5) as number[];
  } else if (selectedPage + 2 > pageArray.length - 1) {
    return pageArray.slice(-5) as number[];
  }
  return pageArray.filter(
    (page) => selectedPage + 2 >= page && selectedPage - 2 <= page
  );
};

export default getCurrentPageArray;
