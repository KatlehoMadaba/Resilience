"use client";
import React, { useState } from "react";
import { Layout, Menu, Button, Popconfirm } from "antd";
import { LogoutOutlined, MessageOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import withAuth from "@/hoc/withAuth";
import { useStyles } from "../style/styles";

const { Sider, Content } = Layout;

const professionalNavigationItems = [ 
  { key: "/chatSession", label: "Chat", icon: <MessageOutlined /> },
];

const ProfessionalLayout = ({ children }) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const { styles } = useStyles();
  const userName = "John Doe";
  const userInitials = userName
    .split(" ")
    .map((word) => word[0])
    .join("");
  const handleLogout = () => {
    sessionStorage.removeItem("jwt");
    router.push("/login");
  };

  return (
    <Layout className={styles.layoutContainer}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        breakpoint="lg"
        collapsedWidth="0"
        className={styles.sider}
      >
        <div className={styles.initialsAvatar}>{userInitials}</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/professional"]}
          items={professionalNavigationItems}
          onClick={({ key }) => router.push(key)}
        />

        <div className={styles.logoutContainer}>
          <Popconfirm
            title="Logout"
            description="Are you sure you want to logout?"
            onConfirm={handleLogout}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="primary"
              danger
              icon={<LogoutOutlined />}
              className={
                collapsed
                  ? `${styles.logoutButton} ant-btn-collapsed`
                  : styles.logoutButton
              }
            >
              {collapsed ? "" : "Logout"}
            </Button>
          </Popconfirm>
        </div>
      </Sider>

      <Layout>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};
export default withAuth(ProfessionalLayout);
