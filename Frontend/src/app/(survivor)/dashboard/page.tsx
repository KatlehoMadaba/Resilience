"use client"
import React, { useEffect, useState } from 'react';
import { Layout, Card, Typography, Row, Col, Modal, Rate, Spin } from 'antd';
import { FaSmile, FaMeh, FaFrown } from 'react-icons/fa';
import Sidebar from '../../../components/dashboards/Sidebar';
import { useRouter } from "next/navigation";
import styles from './dashboard.module.css';
import { useUserActions, useUserState } from '@/providers/users-providers';
import { useSurvivorActions, useSurvivorState } from '@/providers/survivors-provider';

const { Content, Sider } = Layout;
const { Title, Text } = Typography;

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const {getCurrentUser} =useUserActions();
  const {getCurrentSurvivor}=useSurvivorActions();
  const {isPending,isError}=useUserState();
  const {currentSurvivor}=useSurvivorState();
  const [loading,setLoading]=useState(true);
  const router=useRouter();

  const showRatingModal = (mood) => {
    setSelectedEmoji(mood);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleMenuItemClick = (key) => {
    console.log(`Menu item clicked: ${key}`);
  };

  const handleLogout = () => {
   sessionStorage.clear
    router.push("/")
  };

  const handleTestimonyClick = () => {
    router.push("/testimony")
  
  };

  const handleJournalClick = () => {
    router.push("/journalEntry")
  };

  const handleChatClick = () => {
    router.push("/aiChat")

  };

useEffect(()=>{
    fetchSurvivorOnReload()
  },[])

  useEffect(() => {
    setLoading(isPending);
    if (isError) setLoading(false);
  }, [isPending, isError]);

  const fetchSurvivorOnReload= async ()=>{
    const token =sessionStorage.getItem("jwt");
    if(!token) return;
    try{
      setLoading(true)
      const user=await getCurrentUser(token);
      await getCurrentSurvivor(user.id);
    }
    catch(err)
    {
      console.error("Error loading the Survivor:",err)
    }
    finally{
      setLoading(false)
    }
  }
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
          <Card className={styles.welcomeCard}>
            <Title level={4}>
  👋 Welcome, 
  {currentSurvivor?.isAnonymous 
    ? currentSurvivor?.anonymousId 
    : currentSurvivor?.useDisplayNameOnly 
      ? currentSurvivor?.displayName 
      : currentSurvivor?.name
      }!
</Title>
            <p>
              Today is a new day. You are strong and resilient. <br />
              Remember to take care of yourself and reach out for support when
              needed.
            </p>
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
    </Spin>
  );
};

export default Dashboard;