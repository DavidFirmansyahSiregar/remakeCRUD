import { Space, Table, Tag } from "antd";
const { Column, ColumnGroup } = Table;
const data = [
  {
    key: "1",
    fullName: "Joe",
    userName: "D4",
    phoneNumber: "123",
    age: "20",
  },
  {
    key: "2",
    fullName: "Joe",
    userName: "D4",
    phoneNumber: "123",
    age: "20",
  },
  {
    key: "3",
    fullName: "Joe",
    userName: "D4",
    phoneNumber: "123",
    age: "20",
  },
];

export const Read = () => (
  <Table dataSource={data}>
    <ColumnGroup title="Employee">
      <Column title="FullName" dataIndex="fullName" key="1" />
      <Column title="UserName" dataIndex="userName" key="2" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="PhoneNumber" dataIndex="phoneNumber" key="3" />
    </ColumnGroup>
    <Column
      title="Action"
      key="action"
      render={(_, record) => (
        <Space size="middle">
          <a>Invite {record.lastName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);
