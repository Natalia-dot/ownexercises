import styled from "styled-components";
import { IconAnchorProps } from "../../../props/props";

export const IconAnchorStyled = styled.a<IconAnchorProps>`
  height: ${(props) => (props.height ? props.height : "50px")};
  width: ${(props) => (props.width ? props.width : "50px" )};

  
  img {
    overflow: hidden;
    object-fit: contain;
    height: 100%;
    width: 100%;
    transition: transform 0.3s ease-in-out;

    &:hover {
    transform: scale(1.2);
  }
  }


`;
