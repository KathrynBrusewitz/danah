import React from "react";
import Layout from "../components/Layout";
import { ExternalLink } from "../components/Link";

const ContactPage = () => {
  return (
    <Layout>
      <title>Contact</title>
      <p>
        Email me at <ExternalLink href="#">danahbanana@gmail.com</ExternalLink>.
        Double tap my beautiful face{" "}
        <ExternalLink href="#">@danthewoahman</ExternalLink>. Re-quack my bird
        tweets <ExternalLink href="#">@danahhhh</ExternalLink>.
      </p>
      <p>
        I also weave <ExternalLink href="#">underwater baskets</ExternalLink>.
      </p>
    </Layout>
  );
};

export default ContactPage;
