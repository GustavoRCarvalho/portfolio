import { styled } from "styled-components"

export const BackgroundCard = styled.div`
  background-color: ${(props) => props.$backgroundcolor ?? "#0000"};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-block: 1rem;
`
