import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, theme} from 'antd';
import './layouting.css';
import { PlusOutlined, InfoOutlined, DiffOutlined, DeleteOutlined} from '@ant-design/icons';


const { Header, Footer, Content, Sider } = Layout;
export const Layouting = () => {
    const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[
            {
              key: '1',
              icon: <PlusOutlined />,
              label: 'Create',
              keyPath: '/create',
            },
            {
              key: '2',
              icon: <InfoOutlined />,
              label: 'Read',
              keyPath: '/read'
            },
            {
              key: '3',
              icon: <DiffOutlined />,
              label: 'Update',
            },
            {
              key: '4',
              icon: <DeleteOutlined />,
              label: 'Delete',
            },
          ]}
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
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
        </Footer>
      </Layout>
    </Layout>

  );
}


