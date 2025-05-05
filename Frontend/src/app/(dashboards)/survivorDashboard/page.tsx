"use client";

import {
  Layout,
  Menu,
  Button,
  Card,
  Typography,
  Row,
  Col,
  Modal,
  Rate,
} from "antd";
import {
  HomeOutlined,
  FileTextOutlined,
  MessageOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";
import { useState } from "react";
import styles from "../dashboard.module.css";

const { Sider, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function SurvivorDashboard() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const showRatingModal = (emoji) => {
    setSelectedEmoji(emoji);
    setIsModalVisible(true);
  };

  const handleModalOk = () => setIsModalVisible(false);
  const handleModalCancel = () => setIsModalVisible(false);

  const handleTestimonyClick = () => {
    alert("Write a testimony clicked");
  };

  const handleJournalClick = () => {
    alert("Write a journal entry clicked");
  };

  const handleChatClick = () => {
    alert("Let's Talk clicked");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} className={styles.sidebar}>
        <div className={styles.logo} />
        <Menu
          mode="inline"
          defaultSelectedKeys={["dashboard"]}
          className={styles.menu}
        >
          <Menu.Item key="dashboard" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="report" icon={<FileTextOutlined />}>
            Generate a report
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
        <Button
          icon={<LogoutOutlined />}
          type="text"
          className={styles.logout}
        >
          Logout
        </Button>
      </Sider>

      <Layout>
        <Content className={styles.content}>
          {/* Welcome Section */}
          <Card className={styles.welcomeCard}>
            <Title level={4}>👋 Welcome, Survivor</Title>
            <Paragraph>
              Today is a new day. You are strong and resilient. <br />
              Remember to take care of yourself and reach out for support when
              needed.
            </Paragraph>
          </Card>

          {/* Mood Section */}
          <div className={styles.moodSection}>
            <Title level={4}>How are you feeling today?</Title>
            <div className={styles.emojiContainer}>
              <FaSmile className={styles.emoji} onClick={() => showRatingModal("Happy")} />
              <FaMeh className={styles.emoji} onClick={() => showRatingModal("Neutral")} />
              <FaFrown className={styles.emoji} onClick={() => showRatingModal("Sad")} />
            </div>
          </div>

          <Modal
            title={`Rate your mood: ${selectedEmoji}`}
            open={isModalVisible}
            onOk={handleModalOk}
            onCancel={handleModalCancel}
          >
            <Rate />
          </Modal>


          <div className={styles.quoteBox}>
            <Text italic>When you love what you have, you have everything you need</Text>
            <br />
            <Text strong>- Unknown</Text>
          </div>

          <Row gutter={[16, 16]} justify="center">
  <Col xs={24} sm={24} md={8}>
    <Card
      className={styles.card}
      hoverable
      onClick={handleTestimonyClick}
      cover={<div className={styles.testimonyCard}></div>}
    >
      <Card.Meta title="Write Testimony ?" />
    </Card>
  </Col>

  <Col xs={24} sm={24} md={8}>
    <Card
      className={styles.card}
      hoverable
      onClick={handleJournalClick}
      cover={<div className={styles.journalCard}></div>}
    >
      <Card.Meta title="Write Journal Entry?" />
    </Card>
  </Col>

  <Col xs={24} sm={24} md={8}>
    <Card
      className={styles.card}
      hoverable
      onClick={handleChatClick}
      cover={<div className={styles.chatCard}></div>}
    >
      <Card.Meta title="Let's Talk 🗨️" />
    </Card>
  </Col>
</Row>
        </Content>
      </Layout>
    </Layout>
  );
}
