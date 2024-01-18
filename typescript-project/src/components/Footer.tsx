import styled from "styled-components";
import { IconAnchor } from "./IconAnchor";
interface FooterProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  theme?: "light" | "dark";
}

const StyledFooter = styled.footer<FooterProps>`
  width: 100vw;
  height: 7vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.theme === "light" ? "#b29d9d" : "#393333"};
  color: ${(props) => (props.theme === "light" ? "#393333" : "#b29d9d")};
  position: fixed;
  bottom: 0;
`;

export const Footer = (props: FooterProps) => {
  return (
    <StyledFooter {...props}>
      <IconAnchor
        src="https://res.cloudinary.com/drbssyzr7/image/upload/v1705601868/Portfolio/linkedin_k0fpsi.png"
        alt="Natalia's linkedin page"
      />
    </StyledFooter>
  );
};
