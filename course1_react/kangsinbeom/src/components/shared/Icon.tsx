import styled from "styled-components";

interface IconProps {
  isReverse?: boolean;
  onClick?: () => void;
  iconName: "double" | "single" | "page";
  children?: React.ReactNode;
  selectedPage?: number;
}

const Icon = ({
  iconName,
  isReverse = false,
  onClick,
  selectedPage,
  children,
}: IconProps) => {
  switch (iconName) {
    case "double":
      return (
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          height={30}
          width={30}
          style={{ transform: isReverse ? "scaleX(-1)" : "none" }}
          onClick={onClick}
        >
          <title />
          <g data-name="Layer 2" id="Layer_2">
            <path d="M15.12,15.53,25,5.66a1,1,0,0,1,1.41,1.41l-9.06,9.06,8.8,8.8a1,1,0,0,1,0,1.41h0a1,1,0,0,1-1.42,0l-9.61-9.61A.85.85,0,0,1,15.12,15.53Z" />
            <path d="M5.54,15.53l9.88-9.87a1,1,0,1,1,1.41,1.41L7.77,16.13l8.8,8.8a1,1,0,0,1,0,1.41h0a1,1,0,0,1-1.41,0L5.54,16.73A.85.85,0,0,1,5.54,15.53Z" />
          </g>
        </svg>
      );
    case "single":
      return (
        <svg
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          height={30}
          width={30}
          style={{ transform: isReverse ? "scaleX(-1)" : "none" }}
          onClick={onClick}
        >
          <title />
          <g data-name="1" id="_1">
            <path d="M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z" />
          </g>
        </svg>
      );
    default:
      return (
        <Container onClick={onClick} selected={children === selectedPage}>
          <span>{children}</span>
        </Container>
      );
  }
};

const Container = styled.div<{ selected?: boolean }>(({ selected }) => ({
  backgroundColor: selected ? "lightblue" : "none",
  color: selected ? "white" : "none",
  borderRadius: "100%",
  width: "30px",
  height: "30px",
  display: "grid",
  placeItems: "center",
}));
export default Icon;
