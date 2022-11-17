import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 15px;
`;

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
