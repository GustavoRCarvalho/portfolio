import { styled } from "styled-components"

export const CardImage = styled.img`
  border: 1px solid ${(props) => props.$bordercolor ?? "#0000"};
  width: 100%;

  cursor: pointer;

  @media (prefers-color-scheme: light) {
    border: 1px solid #242424;
  }
`
