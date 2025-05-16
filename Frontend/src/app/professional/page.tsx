"use client";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Typography, Spin} from "antd";
import {
  MessageOutlined,
  UsergroupAddOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useUserActions, useUserState } from "@/providers/users-providers";
import { useProfessionalActions,useProfessionalState } from "@/providers/professionals-provider";
import Image from "next/image";
import { useStyles } from "./styles";
import { useRouter } from "next/navigation";
const { Title, Paragraph } = Typography;
const ProfessionalDashboard = () => {
  const { styles } = useStyles();
  const { getCurrentUser } = useUserActions();
  const { getCurrentProfessional } = useProfessionalActions();
  const { isPending, isError } = useUserState();
  const { currentProfessional } = useProfessionalState();
  const [loading, setLoading] = useState(true);
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
    if (!token) {
      router.push("/login");
      return;
    }
    try {
      setLoading(true);
      const user = await getCurrentUser();
      await getCurrentProfessional(user.id);
    } catch (err) {
      console.error("Error loading the Survivor:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Spin spinning={loading}>
      <div className={styles.dashboardWrapper}>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={12}>
            <div className={styles.headerText}>
              <Title level={2}>Welcome {currentProfessional?.name}</Title>
              <Paragraph className={styles.motivation}>
                Every message you send could be a turning point in someones
                healing. Your dedication is making real, lasting change.
              </Paragraph>
            </div>
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card className={styles.statCard}>
                  <MessageOutlined className={styles.icon} />
                  <Title level={3}>We Need You</Title>
                </Card>
              </Col>
              <Col span={12}>
                <Card className={styles.statCard}>
                  <UsergroupAddOutlined className={styles.icon} />
                  <Title level={3}>Survivors Are Our Passion</Title>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col xs={24} md={12}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/helping.jpg"
                alt="Professional support"
                layout="responsive"
                width={500}
                height={350}
                className={styles.heroImage}
              />
            </div>
          </Col>
        </Row>

        <div className={styles.ctaBanner}>
          <HeartOutlined className={styles.heartIcon} />
          <Paragraph className={styles.ctaText}>
            Thank you for being a lifeline. Keep showing up — your presence
            matters more than you know.
          </Paragraph>
        </div>
      </div>
    </Spin>
  );
};

export default ProfessionalDashboard;
