"use client";
import React, { useEffect, useState } from "react";
import { Layout, Card, Typography, Spin } from "antd";
import styles from "./SexualAssaultReportForm.module.css";
import { useUserActions, useUserState } from "@/providers/users-providers";
import { useSurvivorActions } from "@/providers/survivors-provider";
//import SexualAssaultReportForm from "@/components/report/SexualAssaultReportForm";

const { Content } = Layout;
const { Title, Text } = Typography;

const ReportPage = () => {
  const [loading, setLoading] = useState(true);
  const { getCurrentUser } = useUserActions();
  const { getCurrentSurvivor } = useSurvivorActions();
  const { isPending, isError } = useUserState();


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
      const user = await getCurrentUser();
      await getCurrentSurvivor(user.id);
    } catch (err) {
      console.error("Error loading survivor:", err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Spin spinning={loading}>
      <Layout>
        <Content className={styles.content}>
          {/* <SexualAssaultReportForm onSubmit={handleReportSubmit}/> */}
          <Card style={{ marginTop: "1rem" }}>
            <Title level={5}>Your Reports</Title>
            <Text>
              This section will display a list of generated or submitted
              reports.
            </Text>
          </Card>
        </Content>
      </Layout>
    </Spin>
  );
};

export default ReportPage;
