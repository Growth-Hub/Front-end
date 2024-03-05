import { Button, Flex, Input } from "../shared";
import { useSearchQueryContext } from "../../contexts/SearchQueryContetxt";
import { KeyboardEvent, useState } from "react";

const Header = () => {
  const [query, setQuery] = useState<string>("");
  const { setSearchQuery } = useSearchQueryContext();
  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === "Enter") {
      setSearchQuery(query);
    }
  };
  return (
    <Flex
      $justify="space-between"
      $align="center"
      style={{
        width: "calc(100% - 80px)",
        padding: "30px 40px",
        gap: "20px",
      }}
    >
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/mainlogo.png`}
          alt="main logo"
          style={{ height: "50px", objectFit: "cover" }}
        />
      </div>
      <Flex $align="center" style={{ flex: 1, gap: "10px" }}>
        <Input
          type="text"
          value={query}
          onKeyUp={handleSubmit}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </Flex>
      <Flex $align="center" style={{ gap: "10px" }}>
        <Button>로그인</Button>
        <Button>가입하기</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
