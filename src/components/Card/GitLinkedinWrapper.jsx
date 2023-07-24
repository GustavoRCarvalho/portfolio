import { styled } from "styled-components"

export const GitLinkedinWrapper = styled.div`
  display: grid;

  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  margin: 1em;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
