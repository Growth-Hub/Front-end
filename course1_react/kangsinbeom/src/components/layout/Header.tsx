import { Button, Flex, Input, Select } from "../shared";
interface HeaderProps {
  content: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const Header = ({ content, left, right }: HeaderProps) => {
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
      {left && <div>{left}</div>}
      {content}
      {right && <div>{right}</div>}
    </Flex>
  );
};

const HeaderLeft = () => {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/mainlogo.png`}
        alt="main logo"
        style={{ height: "50px", objectFit: "cover" }}
      />
    </div>
  );
};

const HeaderContent = () => {
  return (
    <Flex $align="center" style={{ flex: 1, gap: "10px" }}>
      <Select options={[{ label: "1", value: "1" }]} placeholder="탐색" />
      <Input />
    </Flex>
  );
};

const HeaderRight = () => {
  return (
    <Flex $align="center" style={{ gap: "10px" }}>
      <Button>로그인</Button>
      <Button>가입하기</Button>
    </Flex>
  );
};

Header.Left = HeaderLeft;
Header.Content = HeaderContent;
Header.Right = HeaderRight;

export default Header;
