import styled, { useTheme } from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMoon, IoMoonOutline } from "react-icons/io5";

import Container from "components/Container";

const HeaderEl = styled.header`
  box-shadow: ${(props) => props.theme.shadow};
  background-color: ${(props) => props.theme.bgColor};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: ${(props) => props.theme.color};
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ThemeSwitcher = styled.div`
  //   color: ${(props) => props.theme.color};
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

function Header({ toggleTheme }) {
  const theme = useTheme();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title color={theme.color}>Choose country</Title>
          <ThemeSwitcher onClick={toggleTheme}>
            {theme.name === "dark" ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}
            <span style={{ marginLeft: "10px" }}>{theme.name} Theme</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
}

export default Header;
