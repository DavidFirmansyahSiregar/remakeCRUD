import { Space, Table, } from "antd";
import { data } from "./dataemployee";
const { Column, ColumnGroup } = Table;


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
          <a>Invite {record.userName}</a>
          <a>Delete</a>
        </Space>
      )}
    />
  </Table>
);
