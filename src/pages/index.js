import React from "react";
import Layout from "../components/Layout";
import { ExternalLink } from "../components/Link";
import ProfileImage from "../images/danah-profile.jpeg";

const IndexPage = () => {
  return (
    <Layout>
      <title>Danah Kowdan</title>
      <p>Scientist. Researcher. Artist. Writer.</p>
      <p>
        Speech therapist graduate at{" "}
        <ExternalLink href="#">University of Washington</ExternalLink>.
      </p>
      <p>
        Professional on <ExternalLink href="#">LinkedIn</ExternalLink> and
        occasional <ExternalLink href="#">Instagram</ExternalLink> publisher of
        hot takes. Frequent tea sipper. The spiciest of meme lords.
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
