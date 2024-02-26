import Flex from "./Flex";

const Item = ({ url }: { url?: string }) => {
  return (
    <Flex direction="column">
      <img src={url as string} alt="" height={300} width={220} />
    </Flex>
  );
};

export default Item;
