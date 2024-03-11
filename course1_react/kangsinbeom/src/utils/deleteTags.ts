const deleteTags = (text: string) => {
  return text.replace(/<\/?[^>]+(>|$)/g, "");
};
export default deleteTags;
