"use client";

import { Menu, Layout } from "antd";
import {
  HomeOutlined,
  FileTextOutlined,
  MessageOutlined,
  UserOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import styles from "./sidebar.module.css";

const { Sider } = Layout;

export default function Sidebar() {
  return (
    <Sider
      className={styles.sider}
      breakpoint="lg"
      collapsedWidth="0"
    >
      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<FileTextOutlined />}>
          Generate a report
        </Menu.Item>
        <Menu.Item key="3" icon={<MessageOutlined />}>
          Personal Therapist
        </Menu.Item>
        <Menu.Item key="4" icon={<UserOutlined />}>
          Nearest Hospital
        </Menu.Item>
        <Menu.Item key="5" icon={<GlobalOutlined />}>
          Create A Post
        </Menu.Item>
        <Menu.Item key="6" icon={<LogoutOutlined />}>
          Logout
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
