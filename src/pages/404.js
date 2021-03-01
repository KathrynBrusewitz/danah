import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <title>Not Found</title>
      <p>
        That page doesn't exist{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>
      </p>
    </Layout>
  );
};

export default NotFoundPage;
