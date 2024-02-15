import React from "react";
import styled from "styled-components";
import { ProjectCardProps } from "../../../../props/props";

export const StyProjectCard = styled.div<ProjectCardProps>`
  background-color: beige;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 15vh;
  background: ${({ theme }) => theme.colors.background};
  margin: 1rem;
  padding: 0 2rem 0 0;

  .columnText {
    display: flex;
    flex-direction: column;
    width: 60%;

    p {
      margin: 0;
    }
    
    h3 {
      margin: 0;
    }
  }

  img {
    height: 90px;
    width: 90px;
    margin: 0;
    padding: 0;
  }

  button {
    right: 0;
    width: 20px;
    padding: 0;
  }
`;
