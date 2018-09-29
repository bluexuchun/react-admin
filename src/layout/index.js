import { Component } from 'react'
import { Layout,Menu,Icon } from 'antd'
import {
  AppBar,
  Toolbar,
  Input,
  Typography,
  MuiThemeProvider,
  createMuiTheme,
  Grid,
  Avatar
 } from '@material-ui/core'
import purple from '@material-ui/core/colors/purple'
import { Search } from '@material-ui/icons'
import Link from 'umi/link'
import styles from './index.less'
import AvatarImg from '../assets/avatar.jpg'

const { Header, Footer, Sider, Content } = Layout

const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: purple,
  },
  status: {
    danger: 'orange',
  },
});

const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Layout>
          {/* Sider start */}
          <Sider width={256} className={styles.slideStyle}>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/helloworld">
                  <Icon type="pie-chart" />
                  <span>Helloworld</span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
              >
                  <Menu.Item key="2"><Link to="/Home/Index">首页</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          {/* sider end */}
          <Layout>
            {/* Header start */}
            <Header className={styles.headerStyle}>
              <AppBar color="primary" position="static" className={styles.barStyle}>
                <Toolbar>
                  <Grid container>
                    <Grid item xs={4} >
                      <Typography className={styles.fontStyle} variant="title" color="inherit" noWrap>
                        React demos
                      </Typography>
                    </Grid>
                    <Grid container item={true} xs={8} direction="row" justify="flex-end">
                      <div className={styles.search}>
                        <div>
                          <Search className={styles.searchIcon}/>
                        </div>
                        <Input
                           placeholder="Search..."
                           disableUnderline
                           className="inputChange"
                           />
                      </div>
                      <div className={styles.search}>
                        <Avatar alt="avatar" src={AvatarImg} className={styles.avatar} />
                      </div>
                    </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
            </Header>
            {/* Header end */}
            <Content style={{ margin: '24px 16px 0'}}>
              <div style={{ padding: 24, background:'#fff', minHeight: 360}}>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign:'center'}}>Footer</Footer>
          </Layout>
        </Layout>
      </MuiThemeProvider>
    )
  }
}

export default BasicLayout
