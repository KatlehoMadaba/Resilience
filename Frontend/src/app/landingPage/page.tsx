// app/landingPage/page.tsx
"use client";
import React, { useState } from 'react';
import { Button, Card, Typography, Space, Row, Col, List } from 'antd';
import { SafetyOutlined, ClockCircleOutlined, HeartOutlined, TeamOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { SupportResource, EmergencyContact } from './interfaces';
import SupportModal from '../../components/supportModal/SupportModal'; // import the SupportModal component
import styles from './page.module.css';

const { Title, Paragraph, Text } = Typography;

export default function LandingPage(): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSupportModal = () => setIsModalOpen(true);
  const closeSupportModal = () => setIsModalOpen(false);

  // Support resources and emergency contacts as before
  const supportResources: Array<SupportResource> = [
    {
      title: 'Secure Login',
      description: 'Log in anonymously to access Resilience’s secure and confidential platform, free from judgment.',
      icon: <SafetyOutlined className={styles.featureIcon} />,
    },
    {
      title: 'Immediate Checklist',
      description: 'Receive a step-by-step guide on what to do in the critical hours and days.',
      icon: <ClockCircleOutlined className={styles.featureIcon} />,
    },
    {
      title: 'Medical Help & Reports',
      description: 'Find nearby hospitals and generate police reports without having to relive your trauma.',
      icon: <HeartOutlined className={styles.featureIcon} />,
    },
    {
      title: 'Emotional Support',
      description: 'Work through feelings of panic, fear, and overwhelm in a safe, nonjudgmental space.',
      icon: <TeamOutlined className={styles.featureIcon} />,
    },
  ];

  const emergencyContacts: Array<EmergencyContact> = [
    { title: '24/7 Toll Free Helpline', value: '00000-5277' },
    { title: 'Voice Prompt', value: '1*34773554' },
    { title: 'Ambulance', value: '101777' },
    { title: 'Police', value: '10111' },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
  <div className={styles.heroContent}>
    <div className={styles.imageWrapper}>
      <Image
        src="/images/logo.png"
        alt="Peaceful nature scene representing resilience"
        width={200}
        height={200}
        className={styles.heroImage}
        priority
      />
    </div>
    <div className={styles.heroText}>
      <Title className={styles.heroTitle}>Welcome to Resilience</Title>
      <Paragraph className={styles.heroDescription}>
        A safe space for healing and empowerment. Whether you are seeking
        immediate support or starting your journey, we are here for you.
      </Paragraph>
      <Space size="large" className={styles.heroButtons}>
        <Link href="/login">
          <Button type="primary" size="large" className={styles.primaryBtn}>
            Login
          </Button>
        </Link>
        <Link href="/explore">
          <Button size="large">Continue without Signing up</Button>
        </Link>
      </Space>
    </div>
  </div>
</section>

      {/* Support Features Section */}
      <section className={styles.featuresSection}>
        <Title level={2} className={styles.sectionTitle}>How We Support You</Title>
        <Row gutter={[32, 32]} className={styles.featuresGrid}>
          {supportResources.map((feature, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card className={styles.featureCard} bordered={false}>
                <div className={styles.featureIconWrapper}>
                  {feature.icon}
                </div>
                <Title level={4} className={styles.featureTitle}>{feature.title}</Title>
                <Paragraph className={styles.featureDescription}>
                  {feature.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Support Panel */}
      <section className={styles.supportSection}>
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} md={14}>
            <div className={styles.missionContent}>
              <Title level={2} className={styles.missionTitle}>Your Journey to Healing</Title>
              <Paragraph className={styles.missionText}>
                At Resilience, we believe that every person deserves support, understanding, and the tools to heal. 
                Our platform provides safe, confidential access to resources designed specifically for survivors.
              </Paragraph>
              <Paragraph className={styles.missionText}>
                Whether you are in crisis or looking for long-term support, our community is here to help you 
                navigate each step of your journey with compassion and care.
              </Paragraph>
              <Link href="/resources">
                <Button type="primary" size="large" className={styles.learnMoreBtn}>
                  Explore Resources
                </Button>
              </Link>
            </div>
          </Col>
       
        </Row>
      </section>

      {/* SOS Button - Trigger the modal */}
      <Button 
        danger 
        type="primary" 
        className={styles.sosButton} 
        onClick={openSupportModal}
      >
        SOS
      </Button>
      {/* The modal */}
      <SupportModal open={isModalOpen} onClose={closeSupportModal} />
    </div>
  );
}
