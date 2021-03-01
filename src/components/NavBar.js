import React from "react";
import styled from "@emotion/styled";
import { InternalLink } from "./Link";
import Colors from "./Colors";

const NavBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;
`;

const NavTitle = styled.h1`
  font-size: 24px;
  "& > a": {
    border-bottom: 2px solid;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-flow: row wrap;
  @media all and (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const NavLink = styled(InternalLink)`
  font-size: 16px;
  color: ${Colors.black};
  &:hover {
    color: ${Colors.red};
    border-bottom: none;
  }
  @media all and (min-width: 601px) {
    margin-left: 16px;
  }
`;

export default () => {
  return (
    <NavBar>
      <NavTitle>
        <InternalLink to="/">danah kowdan</InternalLink>
      </NavTitle>
      <Navigation>
        <NavLink to="/">home</NavLink>
        <NavLink to="/work">work</NavLink>
        <NavLink to="/writing">writing</NavLink>
        <NavLink to="/contact">contact</NavLink>
      </Navigation>
    </NavBar>
  );
};
