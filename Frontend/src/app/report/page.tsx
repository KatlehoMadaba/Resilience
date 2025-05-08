
"use client";
import React, { useEffect, useState } from "react";
import { Layout, Card, Typography, Spin } from "antd";
import Sidebar from "../../components/dashboards/Sidebar";
import { useRouter } from "next/navigation";
import styles from "../../components/dashboards/sidebar.module.css";
import { useUserActions, useUserState } from "@/providers/users-providers";
import { useSurvivorActions, useSurvivorState } from "@/providers/survivors-provider";
import SexualAssaultReportForm from "@/components/report/SexualAssaultReportForm";

const { Content, Sider } = Layout;
const { Title, Text } = Typography;

const ReportPage = () => {
  const [loading, setLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(false);
  const { getCurrentUser } = useUserActions();
  const { getCurrentSurvivor } = useSurvivorActions();
  const { isPending, isError } = useUserState();
  const { currentSurvivor } = useSurvivorState();
  const handleReportSubmit = (values: any) => {
    console.log('Submitted Report:', values);
    // Send this data to your backend or store it as needed
  };
  
  const router = useRouter();

  useEffect(() => {
    fetchSurvivorOnReload();
  }, []);

  useEffect(() => {
    setLoading(isPending);
    if (isError) setLoading(false);
  }, [isPending, isError]);

  const fetchSurvivorOnReload = async () => {
    const token = sessionStorage.getItem("jwt");
    if (!token) return;
    try {
      setLoading(true);
      const user = await getCurrentUser(token);
      await getCurrentSurvivor(user.id);
    } catch (err) {
      console.error("Error loading survivor:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    sessionStorage.removeItem("jwt");
    router.push("/");
  };

  const handleMenuItemClick = (key: string) => {
    console.log(`Menu item clicked: ${key}`);
  };
  return (
    <Spin spinning={loading}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={200} className={styles.siderContainer}>
          <Sidebar
            onMenuItemClick={handleMenuItemClick}
            onLogout={handleLogout}
          />
        </Sider>
        <Layout>
          <Content className={styles.content}>
            <SexualAssaultReportForm onSubmit={handleReportSubmit}/>
            <Card style={{ marginTop: "1rem" }}>
              <Title level={5}>Your Reports</Title>
              <Text>This section will display a list of generated or submitted reports.</Text>
            </Card>
          </Content>
        </Layout>
      </Layout>
    </Spin>
  );
};

export default ReportPage;
