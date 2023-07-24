import { styled } from "styled-components"

export const CardImage = styled.img`
  border: 1px solid ${(props) => props.$bordercolor ?? "#0000"};
  width: 100%;
`
