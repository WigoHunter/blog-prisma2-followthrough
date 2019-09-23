import React, { Component, ReactNode } from "react";
import { Layout } from "antd";
import Head from "next/head";
import Link from "next/link";

const { Footer, Header, Content } = Layout;

type Props = {
  title?: string;
  children: ReactNode;
};

class MainLayout extends Component<Props> {
  render() {
    const { title, children } = this.props;
    return (
      <Layout>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Header>
          <nav>
            <Link href="/">Home</Link>
          </nav>
        </Header>

        <Content>{children}</Content>
        <Footer>
          <hr />
          <span>Footer thing</span>
        </Footer>
      </Layout>
    );
  }
}

export default MainLayout;
