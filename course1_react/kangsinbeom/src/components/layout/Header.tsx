import { Button, Flex, SearchInput } from "../shared";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import useGetQueryFromLocation from "../../hooks/useGetQueryFromLocation";
import { Link } from "react-router-dom";
import AutoSearch from "../search/AutoSearch";
import { useModalContext } from "../../contexts/ModalContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../apis/firebase";

const Header = () => {
  const navigate = useNavigate();
  const { setIsOpen } = useModalContext();
  const { user } = useAuthContext();
  const [query, setQuery] = useState<string>("");
  const [hidden, setHidden] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const newQuery = useGetQueryFromLocation();
  const debouncedQuery = useDebounce(query);
  const keywordMove = (keyword: string) => {
    setQuery(keyword);
    setHidden(true);
  };
  const handleSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === "Enter" && inputRef.current) {
      navigate(`/search?query=${query}`);
      setHidden(true);
      inputRef.current.blur();
    }
  };
  useEffect(() => {
    if (newQuery) setQuery(newQuery);
  }, [newQuery]);
  return (
    <Flex
      $justify="space-between"
      $align="center"
      style={{
        width: "calc(100% - 80px)",
        padding: "30px 40px",
        gap: "20px",
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        borderBottom: "1px solid black",
      }}
    >
      <Link to="/search" onClick={() => setQuery("")}>
        <img
          src={`${process.env.PUBLIC_URL}/mainlogo.png`}
          alt="main logo"
          style={{ height: "50px", objectFit: "cover" }}
        />
      </Link>
      <Flex
        $align="center"
        style={{ flex: 1, gap: "10px", position: "relative" }}
      >
        <SearchInput
          ref={inputRef}
          type="text"
          value={query}
          onKeyUp={handleSubmit}
          onFocus={() => setHidden(false)}
          onBlur={() => setHidden(true)}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <AutoSearch
          hidden={hidden}
          debouncedQuery={debouncedQuery}
          onClick={keywordMove}
          onClose={() => setHidden(true)}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        />
      </Flex>
      {user.uid ? (
        <Button onClick={() => signOut(auth)}>로그아웃</Button>
      ) : (
        <Button onClick={() => setIsOpen(true)}>로그인</Button>
      )}
    </Flex>
  );
};

export default Header;
