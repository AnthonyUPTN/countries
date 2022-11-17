import styled from "styled-components";
import Container from "components/Container";

const Wrapper = styled.main`
  padding: 10px 0;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};

  @media (min-width: 767px) {
    padding: 15px 0;
  }
`;

function Main({ children }) {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

export default Main;
