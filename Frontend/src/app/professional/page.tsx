"use client";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Typography, Spin } from "antd";
import {
  MessageOutlined,
  UsergroupAddOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import {
  useChatMessageActions,
  useChatMessageState,
} from "@/providers/chat-provider";
import { useRouter } from "next/navigation";
import {
  useProfessionalState,
  useProfessionalActions,
} from "@/providers/professionals-provider";
import { useUserState, useUserActions } from "@/providers/users-providers";
import Image from "next/image";
import { useStyles } from "./styles";
const { Title, Paragraph } = Typography;

const ProfessionalDashboard = () => {
  const [loading, setLoading] = useState(false);
  const { styles } = useStyles();
  const { countMessages } = useChatMessageActions();
  const { CountMessages: messageCount } = useChatMessageState();
  const { getCurrentUser } = useUserActions();
  const { getCurrentProfessional } = useProfessionalActions();
  const { currentProfessional } = useProfessionalState();
  const router = useRouter();

  useEffect(() => {
    fetchSurvivorOnReload();
  }, []);

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
      console.log("user", user.id, "this", currentProfessional?.name);
    } catch (err) {
      console.error("Error loading the Professional:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.dashboardWrapper}>
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={12}>
          <div className={styles.headerText}>
            <Title level={2}>Welcome, {currentProfessional?.name}</Title>
            <Paragraph className={styles.motivation}>
              Every message you send could be a turning point in someones
              healing. Your dedication is making real, lasting change.
            </Paragraph>
          </div>

          {loading ? (
            <Spin size="large" />
          ) : (
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Card className={styles.statCard}>
                  <MessageOutlined className={styles.icon} />
                  <Title level={3}>{messageCount ?? 0}</Title>
                  <Paragraph>Messages Sent</Paragraph>
                </Card>
              </Col>
              <Col span={12}>
                <Card className={styles.statCard}>
                  <UsergroupAddOutlined className={styles.icon} />
                  <Title level={3}>{0}</Title>
                  <Paragraph>Survivors Reached</Paragraph>
                </Card>
              </Col>
            </Row>
          )}
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
  );
};

export default ProfessionalDashboard;
