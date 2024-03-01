import { Dog } from "../models/dog";

export const getDogs = async ({ pageParam }: { pageParam: number }) => {
  const data = await fetch(
    `${process.env.REACT_APP_URL}?limit=10&page=${pageParam}`,
    {
      method: "GET",
      headers: {
        "x-api-key": process.env.REACT_APP_API_KEY as string,
      },
    }
  )
    .then((response) => response.json())
    .then((data: Dog[]) => data);

  const postsUrls = data.map((post) => {
    return new Promise((res, rej) => {
      const image = new Image();
      image.src = post.url;
      image.onload = () => res(post.url);
      image.onerror = () => rej(post.url);
    });
  });

  await Promise.all(postsUrls);

  return data;
};
