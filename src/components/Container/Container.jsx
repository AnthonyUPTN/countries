import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 15px;
  @media screen and (min-width: 768px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1240px;
  }
`;

// @media screen and (min-width: 375px) and (max-width: 767px) {

// }

export default Container;
