"use client";
import React, { useState } from "react";
import { Button, Card, Typography, Space, Row, Col, Divider } from "antd";
import * as icons from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import styles from "./LandingPage.module.css";
import { useRouter } from "next/navigation";
const { Title, Paragraph, Text } = Typography;

interface SupportResource {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const LandingPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onClickLogin = () => {
    setLoading(true);
    router.push("/login");
  };
  const supportResources: Array<SupportResource> = [
    {
      title: "Medical & Legal Support",
      description:
        "Find nearby medical centers and generate reports without having to repeatedly share your experience.",
      icon: <icons.HeartOutlined className={styles.featureIcon} />,
    },
    {
      title: "Secure & Private",
      description:
        "Access Resilience's secure and confidential platform with complete anonymity and privacy protection.",
      icon: <icons.SafetyCertificateOutlined className={styles.featureIcon} />,
    },
    {
      title: "Immediate Guidance",
      description:
        "Get a personalized step-by-step guide for what to do in the critical hours and days following trauma.",
      icon: <icons.ClockCircleOutlined className={styles.featureIcon} />,
    },
    {
      title: "24/7 AI Therapist",
      description:
        "Talk to Phoenix, our always-available AI therapist, for calm, validating conversation whenever you need it.",
      icon: <icons.RobotOutlined className={styles.featureIcon} />,
    },
    {
      title: "Human Therapist Chat",
      description:
        "Connect with a licensed human therapist in real-time chat for professional support tailored to your journey.",
      icon: <icons.UserOutlined className={styles.featureIcon} />,
    },
    {
      title: "Write Your Testimony",
      description:
        "Share your story in a safe space—anonymously or openly—to inspire others or begin your healing through writing.",
      icon: <icons.EditOutlined className={styles.featureIcon} />,
    },
    {
      title: "Healing Resources",
      description:
        "Access therapeutic tools and exercises in a safe, nonjudgmental space at your own pace.",
      icon: <icons.TeamOutlined className={styles.featureIcon} />,
    },
  ];

  const testimonials = [
    {
      quote:
        "Having everything in one place when I couldn't think clearly made all the difference.",
      author: "Anonymous Survivor",
    },
    {
      quote:
        "The journal feature helped me process my emotions when I wasn't ready to talk to anyone.",
      author: "Anonymous Survivor",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.imageWrapper}>
            <svg
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.heroLogo}
            >
              <circle cx="150" cy="150" r="130" fill="#A5D5E8" />
              <path
                d="M150 60 C 150 60, 220 80, 220 80 C 220 80, 220 160, 220 160 C 220 160, 150 220, 150 220 C 150 220, 80 160, 80 160 C 80 160, 80 80, 80 80 C 80 80, 150 60, 150 60"
                fill="#9E9AC8"
                stroke="#7B75AA"
                strokeWidth="5"
              />
              <path
                d="M150 170 C 130 150, 100 130, 100 110 C 100 90, 120 90, 130 100 C 140 110, 150 130, 150 130 C 150 130, 160 110, 170 100 C 180 90, 200 90, 200 110 C 200 130, 170 150, 150 170"
                fill="#FFFFFF"
              />
            </svg>
          </div>
          <div className={styles.heroText}>
            <Title className={styles.heroTitle}>Welcome to Resilience</Title>
            <Paragraph className={styles.heroDescription}>
              A compassionate space for survivors of sexual assault. You are not
              alone on this journey — we are here with gentle guidance,
              resources, and support whenever you need it.
            </Paragraph>
            <Space size="large" className={styles.heroButtons}>
              <Button
                onClick={onClickLogin}
                type="primary"
                size="large"
                className={styles.primaryBtn}
                loading={loading}
              >
                Login
              </Button>
              <Link href="/checklist">
                <Button size="large" className={styles.secondaryBtn}>
                  Continue without Signing up
                </Button>
              </Link>
            </Space>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <Title level={2} className={styles.sectionTitle}>
          How We Support You
        </Title>
        <Row gutter={[32, 32]} className={styles.featuresGrid}>
          {supportResources.map((feature, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Card className={styles.featureCard} variant="borderless">
                <div className={styles.featureIconWrapper}>{feature.icon}</div>
                <Title level={4} className={styles.featureTitle}>
                  {feature.title}
                </Title>
                <Paragraph className={styles.featureDescription}>
                  {feature.description}
                </Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Support Section */}
      <section className={styles.supportSection}>
        <Row gutter={[32, 32]} align="middle" className={styles.supportRow}>
          <Col xs={24} md={14}>
            <div className={styles.missionContent}>
              <Title level={2} className={styles.missionTitle}>
                Your Journey to Healing
              </Title>
              <Paragraph className={styles.missionText}>
                At Resilience, we provide gentle, nonjudgmental support to help
                you feel heard, safe, and empowered at every step.
              </Paragraph>
              <Paragraph className={styles.missionText}>
                Whether its your first step or the next one on your path, we are
                honored to provide resources that respect your pace and privacy.
              </Paragraph>
              <Link href="/checklist">
                <Button
                  type="primary"
                  size="large"
                  className={styles.learnMoreBtn}
                >
                  Explore Resources
                </Button>
              </Link>
            </div>
          </Col>
          <Col xs={24} md={10}>
            <div className={styles.supportImageContainer}>
              <div className={styles.supportImage}>
                <Image
                  src="/images/SupportingEachOther.jpg"
                  alt="People supporting each other"
                  width={600}
                  height={400}
                  className={styles.supportImg}
                />
                <div className={styles.imageCaptionBox}>
                  <Text className={styles.imageCaption}>
                    You do not have to face this alone
                  </Text>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonialsSection}>
        <Title level={2} className={styles.sectionTitle}>
          Voices of Strength
        </Title>
        <Row gutter={[32, 32]} className={styles.testimonialRow}>
          {testimonials.map((testimonial, index) => (
            <Col xs={24} md={12} key={index}>
              <Card className={styles.testimonialCard} variant="borderless">
                <div className={styles.quoteIcon}></div>
                <Paragraph className={styles.testimonialQuote}>
                  {testimonial.quote}
                </Paragraph>
                <Text className={styles.testimonialAuthor}>
                  — {testimonial.author}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <Title level={2} className={styles.ctaTitle}>
            Take the First Step
          </Title>
          <Paragraph className={styles.ctaText}>
            Whether you need immediate guidance or ongoing support, Resilience
            is here for you whenever you are ready.
          </Paragraph>
          <Space size="large" className={styles.ctaButtons}>
            <Link href="/checklist">
              <Button size="large" className={styles.secondaryBtn}>
                Access Resources Now
              </Button>
            </Link>
          </Space>
        </div>
      </section>
      {/* Footer with safety exit */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.quickExit}>
            <Text className={styles.exitText}>Need to leave quickly?</Text>
            <Link href="https://www.google.com">
              <Button className={styles.exitButton}>Quick Exit</Button>
            </Link>
          </div>
          <Divider className={styles.footerDivider} />
          <Text className={styles.copyright}>
            Resilience © {new Date().getFullYear()} — Created with care for
            survivors
          </Text>
        </div>
      </footer>
    </div>
  );
};
export default LandingPage;
