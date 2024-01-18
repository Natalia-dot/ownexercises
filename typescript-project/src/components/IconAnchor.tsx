import React from "react";
import styled from "styled-components";

interface IconAnchorProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const IconAnchorStyled = styled.a<IconAnchorProps>`
  height: ${(props) => (props.height ? props.height : "6vh")};
  width: ${(props) => (props.width ? props.width : "6vh")};

  img {
    height: ${(props) => (props.height ? props.height : "6vh")};
    width: ${(props) => (props.width ? props.width : "6vh")};
  }
`;

export const IconAnchor = (props: IconAnchorProps) => {
  return (
    <IconAnchorStyled {...props}>
      <img src={props.src} alt={props.alt} />
    </IconAnchorStyled>
  );
};
