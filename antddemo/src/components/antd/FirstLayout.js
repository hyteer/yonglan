import React from 'react'
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  logoText = "YongLan Tech"
  changeLogo = () => {

    console.log(this.state.collapsed)
    if(this.state.collapsed){
      //console.log("collapsed...")
      //console.log(this.state)
      this.logoText = "YongLan Tech"
      //alert("ready to uncollapsed...")
    }else{
      //console.log("uncollapsed...")
      //console.log(this.state)
      this.logoText = "YLT"
      //alert("ready to collapsed...")
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    this.changeLogo();
  }
  render() {
    return (
      <div id="mylayout">
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div id="logo" className="logo">
            <img src="favicon.ico" />
            <span>{this.logoText}</span>
            </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span className="nav-text">nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>

            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <a href="#">Test</a>

          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
    );
  }
}


export default SiderDemo
