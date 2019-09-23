import * as React from "react";
import { NextPage } from "next";
import Layout from "../components/main-layout";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Blog Layout">
      <h1>Hello there!!</h1>
    </Layout>
  );
};

export default IndexPage;
