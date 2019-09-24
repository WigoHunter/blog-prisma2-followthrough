import React from "react";
import { UsersQueryComponent } from "../generated/apollo-components";
import { Table } from "antd";

type Props = {};

class UsersList extends React.PureComponent<Props> {
  render() {
    return (
      <UsersQueryComponent>
        {({ loading, error, data }) => {
          if (loading) {
            return <p>loading</p>;
          }

          if (error) {
            return <p>error</p>;
          }

          if (data && "users" in data && data.users.length > 0) {
            const feedData = data.users.map(({ name, email }, index) => ({
              key: index,
              name,
              email
            }));

            const columns = [
              { title: "Name", dataIndex: "name", key: "name" },
              { title: "Email", dataIndex: "email", key: "email" }
            ];

            return <Table columns={columns} dataSource={feedData} />;
          }

          return <p>No users yet...</p>;
        }}
      </UsersQueryComponent>
    );
  }
}

export default UsersList;
