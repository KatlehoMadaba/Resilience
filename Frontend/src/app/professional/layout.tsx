"use client";
import React, { useEffect, useState } from "react";
import { Layout, Menu, Button, Popconfirm } from "antd";
import {
  HomeOutlined,
  LogoutOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import withAuth from "@/hoc/withAuth";
import { useStyles } from "../style/styles";
import { useUserActions} from "@/providers/users-providers";
import {
  useProfessionalActions,
  useProfessionalState,
} from "@/providers/professionals-provider";
const { Sider, Content } = Layout;

const professionalNavigationItems = [
  { key: "/professional", label: "Dashboard", icon: <HomeOutlined /> },
  { key: "/chatSession", label: "Chat", icon: <MessageOutlined /> },
];

const ProfessionalLayout = ({ children }) => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
 const { getCurrentUser } = useUserActions();
  const { getCurrentProfessional } = useProfessionalActions();
  const { currentProfessional } = useProfessionalState();

  useEffect(() => {
      fetchSurvivorOnReload();
  }, []);
    const fetchSurvivorOnReload = async () => {
      try {
        const user = await getCurrentUser();
        await getCurrentProfessional(user.id);
      } catch (err) {
        console.error("Error loading the Survivor:", err);
      }
    };
  const { styles } = useStyles();

  const userName = currentProfessional?.name||"";
  const userInitials = userName
    ?userName
    .split(" ")
    .map((word) => word[0])
    .join("")
      :"JD"
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
