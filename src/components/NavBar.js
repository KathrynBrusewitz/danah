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
  & > a {
    border-bottom: 2px solid;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-flow: row wrap;
`;

const NavLink = styled(InternalLink)`
  font-size: 16px;
  color: ${Colors.black};
  &:hover {
    color: ${Colors.red};
    border-bottom: none;
  }
  margin-left: 16px;
`;

const active = {
  color: Colors.grey,
  "&:hover": {
    color: Colors.grey,
  },
};

export default () => {
  return (
    <NavBar>
      <NavTitle>
        <InternalLink to="/">Danah Kowdan</InternalLink>
      </NavTitle>
      <Navigation>
        <NavLink to="/" activeStyle={active}>
          bio
        </NavLink>
        <NavLink to="/resume" activeStyle={active}>
          resume
        </NavLink>
        <NavLink to="/contact" activeStyle={active}>
          contact
        </NavLink>
      </Navigation>
    </NavBar>
  );
};
