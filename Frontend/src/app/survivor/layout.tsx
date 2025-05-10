"use client";
import React, { useState } from "react";
import { Layout, Menu, Button, Popconfirm } from "antd";
import {
  HomeOutlined,
  FileTextOutlined,
  MedicineBoxOutlined,
  AlertOutlined,
  CommentOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import BottomNav from "../../components/shared/BottomNav";
import withAuth from "@/hoc/withAuth";
import { useStyles } from "../style/styles";

const { Sider, Header, Content } = Layout;

const survivorsNavigationItems = [
  { key: "/survivor", label: "Dashboard", icon: <HomeOutlined /> },
  {
    key: "/survivor/journalEntry",
    label: "Journal Entry",
    icon: <FileTextOutlined />,
  },
  {
    key: "/survivor/medicalCentres",
    label: "Medical Centres",
    icon: <MedicineBoxOutlined />,
  },
  { key: "/survivor/report", label: "Report", icon: <AlertOutlined /> },
  { key: "/survivor/testimony", label: "Testimony", icon: <CommentOutlined /> },
  {
    key: "/survivor/humanTherapist",
    label: "Human Therapist",
    icon: <UserOutlined />,
  },
];

const SurvivorLayout = ({ children }) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const { styles } = useStyles();

  const handleLogout = () => {
    // Clear authentication tokens/data
    localStorage.removeItem("auth_token"); // Adjust based on your auth implementation
    sessionStorage.removeItem("user_data");

    // Redirect to login page
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
        <div className={styles.logo} />
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
        <Header className={styles.header} />
        <Content className={styles.content}>{children}</Content>
      </Layout>

      {/* Mobile bottom navigation */}
      <div className="md:hidden">
        <BottomNav
          navItems={survivorsNavigationItems}
          onLogout={handleLogout}
        />
      </div>
    </Layout>
  );
};

// Wrap the component with authentication HOC
// const AuthenticatedSurvivorLayout = withAuth(SurvivorLayoutContent);

// const SurvivorLayout = ({ children }) => (
//   <AuthenticatedSurvivorLayout>{children}</AuthenticatedSurvivorLayout>
// );

export default withAuth(SurvivorLayout);
