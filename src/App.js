import React from 'react'
import { Outlet } from 'react-router-dom';
import { Layout, Menu, theme} from 'antd';
import './App.css';
import { PlusOutlined, InfoOutlined, DiffOutlined, DeleteOutlined} from '@ant-design/icons';


const { Header, Footer, Content, Sider } = Layout;
const App = () => {
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
            },
            {
              key: '2',
              icon: <InfoOutlined />,
              label: 'Read',
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
         <Outlet />
        </Footer>
      </Layout>
    </Layout>

  );
}

export default App;
