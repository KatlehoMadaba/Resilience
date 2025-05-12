"use client";
import React from "react";
import { Button, Card, Typography, Row, Col, Divider } from "antd";
import * as icons from "@ant-design/icons";
import Link from "next/link";
import styles from "./RoleSelection.module.css";

const { Title, Paragraph, Text } = Typography;

export default function RoleSelection(): React.ReactElement {
  const userRoles = [
    {
      title: "Immediate Survivor",
      description:
        "I've recently experienced trauma and need immediate support and resources.",
      icon: <icons.HeartOutlined className={styles.roleIcon} />,
      color: "#A5D5E8", // Light blue
      path: "/register/immdetiateSurvivor",
    },
    {
      title: "Past Survivor",
      description: "I'm on my healing journey and looking for ongoing support.",
      icon: <icons.UserOutlined className={styles.roleIcon} />,
      color: "#9E9AC8", // Light purple
      path: "/register/pastSurvivor",
    },
    {
      title: "Professional",
      description:
        "I'm a healthcare or legal professional looking to support survivors.",
      icon: <icons.SafetyCertificateOutlined className={styles.roleIcon} />,
      color: "#87D068", // Light green
      path: "/register/professional",
    },
    {
      title: "Anonymous Access",
      description: "I want to access resources without creating an account.",
      icon: <icons.UserSwitchOutlined className={styles.roleIcon} />,
      color: "#FFB74D", // Light orange
      path: "/register/anonymous",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <section className={styles.headerSection}>
        <div className={styles.headerContent}>
          <div className={styles.logoWrapper}>
            {/* SVG Logo */}
            <svg
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.logo}
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
          <Title className={styles.pageTitle}>Welcome to Resilience</Title>
          <Paragraph className={styles.pageDescription}>
            Please select how youd like to use our platform. Your selection
            helps us provide the most relevant resources and support for your
            needs.
          </Paragraph>
        </div>
      </section>

      {/* Role Selection Section */}
      <section className={styles.selectionSection}>
        <Title level={2} className={styles.sectionTitle}></Title>
        <Row gutter={[24, 24]} className={styles.rolesGrid}>
          {userRoles.map((role, index) => (
            <Col xs={24} sm={12} key={index}>
              <Link href={role.path} style={{ textDecoration: "none" }}>
                <Card
                  className={styles.roleCard}
                  hoverable
                  style={{ borderTop: `4px solid ${role.color}` }}
                >
                  <div
                    className={styles.roleIconWrapper}
                    style={{ backgroundColor: role.color }}
                  >
                    {role.icon}
                  </div>
                  <Title level={3} className={styles.roleTitle}>
                    {role.title}
                  </Title>
                  <Paragraph className={styles.roleDescription}>
                    {role.description}
                  </Paragraph>
                  <Button
                    type="primary"
                    className={styles.selectButton}
                    style={{
                      backgroundColor: role.color,
                      borderColor: role.color,
                    }}
                  >
                    Select
                  </Button>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </section>

      {/* Already have an account section */}
      <section className={styles.loginSection}>
        <div className={styles.loginContent}>
          <Text className={styles.loginText}>Already have an account?</Text>
          <Link href="/login">
            <Button type="link" className={styles.loginButton}>
              Login here
            </Button>
          </Link>
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
}
