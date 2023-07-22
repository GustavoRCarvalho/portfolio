import { styled } from "styled-components"

export const ImageWrapper = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  margin: 2px;
`
