import { Dog } from "../models/dog";

export const getDogs = (page: number) => {
  return fetch(`${process.env.REACT_APP_URL}&page=${page}`, {
    method: "GET",
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY as string,
    },
  })
    .then((response) => response.json())
    .then((data: Dog[]) => data);
};
