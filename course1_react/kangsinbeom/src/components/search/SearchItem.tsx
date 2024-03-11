import { Link } from "react-router-dom";
import { Document } from "../../models/kakao";
import { format } from "date-fns";
import deleteTags from "../../utils/deleteTags";
import { forwardRef } from "react";
import { Flex, Text } from "../shared";

const SearchItem = forwardRef(
  (
    { document }: { document: Document },
    ref: React.Ref<HTMLParagraphElement>
  ) => {
    const { contents, datetime, title, url } = document;
    const date = format(datetime, "yyyy-MM-dd");
    const newContents = deleteTags(contents);
    const newTitle = deleteTags(title);
    return (
      <Link to={url} target="_blank">
        <Flex
          $direction="column"
          style={{
            border: "1px solid black",
            borderRadius: 20,
            padding: "0 10px",
          }}
        >
          <Text fontSize="20px" ref={ref} $bold>
            {newTitle}
          </Text>
          <div>{newContents}</div>
          <div>{date}</div>
        </Flex>
      </Link>
    );
  }
);

export default SearchItem;
