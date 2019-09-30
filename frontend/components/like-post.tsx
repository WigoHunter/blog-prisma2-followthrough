import React from "react";
import { Button } from "antd";
import {
  LikePostComponent,
  FeedQueryDocument
} from "../generated/apollo-components";

type Props = {
  id: string;
  email: string;
};

class LikePost extends React.Component<Props> {
  render() {
    const { id, email } = this.props;

    return (
      <LikePostComponent>
        {likePost => (
          <Button
            onClick={() =>
              likePost({
                variables: { id, authorEmail: email },
                refetchQueries: [
                  { query: FeedQueryDocument, variables: { published: true } },
                  {
                    query: FeedQueryDocument,
                    variables: { published: false }
                  }
                ]
              })
            }
          >
            Like
          </Button>
        )}
      </LikePostComponent>
    );
  }
}

export default LikePost;
