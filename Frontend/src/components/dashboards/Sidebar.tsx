"use client";

import { Menu, Button } from "antd";
import {
  HomeOutlined,
  FileTextOutlined,
  MessageOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import styles from "../dashboards/sidebar.module.css";

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className={styles.sidebar}>
        <div className={styles.logo}>LOGO</div>
        <Menu mode="vertical" defaultSelectedKeys={["dashboard"]}>
          <Menu.Item key="dashboard" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="report" icon={<FileTextOutlined />}>
            Generate Report
          </Menu.Item>
          <Menu.Item key="therapist" icon={<MessageOutlined />}>
            Personal Therapist
          </Menu.Item>
          <Menu.Item key="hospital" icon={<EnvironmentOutlined />}>
            Nearest Hospital
          </Menu.Item>
          <Menu.Item key="post" icon={<GlobalOutlined />}>
            Create A Post
          </Menu.Item>
        </Menu>
        <Button icon={<LogoutOutlined />} type="text" className={styles.logout}>
          Logout
        </Button>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className={styles.mobileNav}>
        <Menu mode="horizontal" className={styles.mobileMenu}>
          <Menu.Item
            key="dashboard"
            icon={<HomeOutlined />}
            className={styles.mobileNavItem}
          />
          <Menu.Item
            key="report"
            icon={<FileTextOutlined />}
            className={styles.mobileNavItem}
          />
          <Menu.Item
            key="therapist"
            icon={<MessageOutlined />}
            className={styles.mobileNavItem}
          />
          <Menu.Item
            key="hospital"
            icon={<EnvironmentOutlined />}
            className={styles.mobileNavItem}
          />
          <Menu.Item
            key="post"
            icon={<GlobalOutlined />}
            className={styles.mobileNavItem}
          />
        </Menu>
      </div>
    </>
  );
}
