import React, { Component } from 'react'
import './style.css'
import { Layout, Menu, Breadcrumb, } from 'antd';
import {
    BankFilled,
    DollarCircleFilled,
    MailFilled,
    MehFilled,
    CheckCircleFilled
} from '@ant-design/icons';
import { Link, } from 'react-router-dom';
import MyRouter from '../../../Configs/Routes';

const { Header, Content, Footer, Sider } = Layout;


class Dasboard extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<BankFilled />}>
                            <Link to="/">
                                Home
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<CheckCircleFilled />}>
                            <Link to="/absensi">
                                Absensi
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<MehFilled />}>
                            <Link to="/karyawan">
                                Karyawan
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<DollarCircleFilled />}>
                            <Link to="/gaji">
                                gaji
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<MailFilled />}>
                            <Link to="/izin">
                                izin
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<userFilled />}>
                            <Link to="/setting">
                                Login
                            </Link>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }} />
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                           <MyRouter/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>©2021 Created by Ivan Prasetya</Footer>
                </Layout>
            </Layout>
        );
    }
}



export default Dasboard
