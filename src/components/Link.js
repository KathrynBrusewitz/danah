import React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Colors from "./Colors";

const Style = `
  color: ${Colors.red};
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid;
  }
`;

export const InternalLink = styled(Link)(Style);

export const ExternalLink = styled.a(Style);
