import Flex from "./Flex";
import Text from "./Text";
import Spacing from "./Spacing";
import { Breed } from "../../models/dog";

const Item = ({ url, breeds }: { url?: string; breeds: Breed[] }) => {
  const data = breeds != null ? breeds[0] : null;

  return (
    <Flex $direction="column">
      <img
        src={url as string}
        alt=""
        height={300}
        width={220}
        style={{ borderRadius: "20px" }}
      />
      <Spacing size={14} />
      <Flex $direction="column">
        <Text $bold={true}>{data?.name}</Text>
        <Text>{data?.bred_for}</Text>
      </Flex>
    </Flex>
  );
};
export default Item;
