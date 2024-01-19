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
  height: ${(props) => (props.height ? props.height : "50px")};
  width: ${(props) => (props.width ? props.width : "50px" )};
  background: ${(props) => (props.id === 'github' && 'radial-gradient(circle, rgba(255,255,255,1) 90%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)')};

  
  img {
    overflow: hidden;
    object-fit: contain;
    transform: ${(props) => (props.id === 'github' && 'scale(1.2)')};
    height: 100%;
    width: 100%;
  }
`;

export const IconAnchor = (props: IconAnchorProps) => {
  return (
    <IconAnchorStyled {...props} target="_blank">
      <img src={props.src} alt={props.alt} />
    </IconAnchorStyled>
  );
};
