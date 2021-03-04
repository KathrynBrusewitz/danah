import React from "react";
import Layout from "../components/Layout";
import styled from "@emotion/styled";

const StyledP = styled.p`
  font-size: 18px;
  font-family: "WorkSans-Light";
  line-height: 30px;
`;

const IndexPage = () => {
  return (
    <Layout>
      <title>Danah Kowdan</title>
      <StyledP>
        I am completing a Speech-Language Pathology M.S. in the MedSLP program
        (adult track) at the University of Washington. After graduation, I hope
        to pursue employment in a hospital setting. I am particularly interested
        in working with multicultural and underserved populations.
      </StyledP>
      <StyledP>
        Currently, I am gaining valuable experience in assessing and treating
        children and adults with speech, language, and cognitive communication
        impairments. Through my internship, I have been able to assess adult
        patients' oropharyngeal swallow function, update diet texture
        recommendations, train patients in compensatory strategies and evidence
        based oropharyngeal exercises to improve swallow function.
      </StyledP>
      <StyledP>
        I am constantly inspired by the resilience of adults, and I take pride
        in supporting their growth and serving them.
      </StyledP>
    </Layout>
  );
};

export default IndexPage;
