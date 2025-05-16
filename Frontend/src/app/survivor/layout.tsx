"use client";
import React, { useState } from "react";
import { Layout, Menu, Button, Popconfirm } from "antd";
import {
  HomeOutlined,
  FileOutlined,
  MedicineBoxOutlined,
  AlertOutlined,
  CommentOutlined,
  UserOutlined,
  LogoutOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import withAuth from "@/hoc/withAuth";
import { useStyles } from "../style/styles";
import Phoenix from "@/components/aiagent/Phoenix";

const { Sider, Content } = Layout;

const survivorsNavigationItems = [
  { key: "/survivor", label: "Dashboard", icon: <HomeOutlined /> },
  {
    key: "/survivor/journalEntry",
    label: "Journal Entry",
    icon: <BookOutlined />,
  },
  {
    key: "/chatSession",
    label: "Therapy",
    icon: <UserOutlined />,
  },
  { key: "/survivor/report", label: "Report", icon: <FileOutlined /> },
  {
    key: "/survivor/medicalCentres",
    label: "Medical Centres",
    icon: <MedicineBoxOutlined />,
  },
  { key: "/survivor/testimony", label: "Testimony", icon: <CommentOutlined /> },
  {
    key: "/survivor/policeStations",
    label: "Police Stations",
    icon: <AlertOutlined />,
  }, // Changed to Alert icon
];

const SurvivorLayout = ({ children }) => {
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
          defaultSelectedKeys={["/survivor"]}
          items={survivorsNavigationItems}
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
      <div className="md:hidden">
        <Phoenix />
      </div>
    </Layout>
  );
};
export default withAuth(SurvivorLayout);
