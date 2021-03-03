import React from "react";
import Layout from "../components/Layout";
import ProfileImage from "../images/danah-profile.jpeg";

const IndexPage = () => {
  return (
    <Layout>
      <title>Danah Kowdan</title>
      <p>
        I am completing a Speech-Language Pathology M.S. in the MedSLP program
        (adult track) at the University of Washington. After graduation, I hope
        to pursue employment in a hospital setting. I am particularly interested
        in working with multicultural and underserved populations.
      </p>
      <p>
        Currently, I am gaining valuable experience in assessing and treating
        children and adults with speech, language, and cognitive communication
        impairments. Through my internship, I have been able to assess adult
        patients' oropharyngeal swallow function, update diet texture
        recommendations, train patients in compensatory strategies and evidence
        based oropharyngeal exercises to improve swallow function.
      </p>
      <p>
        I am constantly inspired by the resilience of adults, and I take pride
        in supporting their growth and serving them.
      </p>
      <div style={{ textAlign: "center", marginTop: 48 }}>
        <img
          src={ProfileImage}
          alt="Someone not Danah because Danah needs to pick a pic"
          style={{ width: "100%", maxWidth: 400 }}
        />
      </div>
    </Layout>
  );
};

export default IndexPage;
