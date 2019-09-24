import * as React from "react";
import { NextPage } from "next";
import Layout from "../components/main-layout";
import UsersList from "../components/users";
import SignupUser from "../components/signup-user";
import FeedList from "../components/feed";
import NewDraft from "../components/new-draft";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Blog Layout">
      <h1>Hello there!!</h1>

      <h3>Signup User</h3>
      <SignupUser />

      <h3>Users List</h3>
      <UsersList />

      <h3>Create Draft</h3>
      <NewDraft />

      <h3>Feed</h3>
      <FeedList published />

      <h3>Hidden Feed</h3>
      <FeedList published={false} />
    </Layout>
  );
};

export default IndexPage;
