import React from "react";
import { Table, Button } from "antd";
import { FeedQueryComponent } from "../generated/apollo-components";
import PublishDraft from "./publish-draft";
import DeletePost from "./delete-post";
import LikePost from "./like-post";

type Props = {
  published: boolean;
};

class FeedList extends React.PureComponent<Props> {
  render() {
    const { published } = this.props;

    return (
      <FeedQueryComponent variables={{ published }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;

          if (data && "feed" in data && data.feed.length > 0) {
            console.log(data.feed);

            const feedData = data.feed.map(({ id, title, content }, index) => ({
              key: index,
              title,
              content,
              id
            }));

            const columns = [
              {
                title: "Title",
                dataIndex: "title",
                key: "title"
              },
              {
                title: "Content",
                dataIndex: "content",
                key: "content"
              },
              {
                title: "Action",
                dataIndex: "action",
                render: (_: any, { id }: { id: string }) => {
                  return (
                    <Button.Group>
                      {published ? null : <PublishDraft id={id} />}
                      <DeletePost id={id} />
                      <LikePost id={id} email="wigo@hunter.com" />
                    </Button.Group>
                  );
                }
              }
            ];

            return <Table columns={columns} dataSource={feedData} />;
          }

          return <p>Nothing yet.</p>;
        }}
      </FeedQueryComponent>
    );
  }
}

export default FeedList;
