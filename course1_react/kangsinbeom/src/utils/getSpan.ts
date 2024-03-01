const getSpan = ({ height, width }: { height: number; width: number }) => {
  const widthHeightRatio = height / width;
  const galleryHeight = Math.ceil(250 * widthHeightRatio);
  const photoSpan = Math.ceil(galleryHeight / 10);
  return photoSpan;
};

export default getSpan;
