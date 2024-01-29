import React from "react";
import styled from "styled-components";
import { IconAnchorProps } from "../props/props";
import { IconAnchorStyled } from "./styles";


export const IconAnchor = (props: IconAnchorProps) => {
  return (
    <IconAnchorStyled {...props} target="_blank">
      <img src={props.src} alt={props.alt} />
    </IconAnchorStyled>
  );
};
