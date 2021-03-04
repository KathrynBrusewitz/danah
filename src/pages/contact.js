import React from "react";
import Layout from "../components/Layout";
import { ExternalLink } from "../components/Link";
import styled from "@emotion/styled";

const StyledP = styled.p`
  font-size: 20px;
  font-family: "WorkSans-Light";
`;

const ContactPage = () => {
  return (
    <Layout>
      <title>Contact</title>
      <StyledP>
        I can be reached at{" "}
        <ExternalLink href="mailto:danahk@uw.edu">danahk@uw.edu</ExternalLink>.
      </StyledP>
    </Layout>
  );
};

export default ContactPage;
