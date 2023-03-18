import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import "./layouting.css";
import {
  PlusOutlined,
  InfoOutlined,
  DiffOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Create, Delete, Read, Update } from "../components";

// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
//   getItem('Option 1', '1',),
//   getItem('Option 2', '2',),
//   getItem('User', 'sub1', [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', ),
// ];

const { Header, Footer, Content, Sider } = Layout;
export const Layouting = () => {
  // const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuData = [
    {
      key: "1",
      name: "create",
      icon: <PlusOutlined />,
      label: <Link>Create</Link>,
      path: "/create",
    },
    {
      key: "2",
      icon: <InfoOutlined />,
      label: <Link>Read</Link>,
      path: "/read",
    },
    {
      key: "3",
      icon: <DiffOutlined />,
      label: <Link>Update</Link>,
      path: "/update",
    },
    {
      key: "4",
      icon: <DeleteOutlined />,
      label: <Link>Delete</Link>,
      path: "/delete",
    },
  ];

  return (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={menuData}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
        </Footer>
      </Layout>
    </Layout>
  );
};
