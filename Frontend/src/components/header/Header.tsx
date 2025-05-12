"use client";
import React, { useState } from "react";
import { Layout, Button, Space, Typography } from "antd";
import Link from "next/link";
import { LoginOutlined } from "@ant-design/icons";
import styles from "./Header.module.css";
import SupportModal from "../supportModal/SupportModal";

const { Header } = Layout;
const { Title } = Typography;

const ResilienceHeader: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const Logo = () => (
    <div className={styles.logoContainer}>
      <svg
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.headerLogo}
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
      <Title level={4} className={styles.logoText}>
        Resilience
      </Title>
    </div>
  );

  return (
    <Header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <Link href="/" className={styles.logoLink}>
            <Logo />
          </Link>
        </div>

        <div className={styles.headerRight}>
          <Space>
            <Button
              type="primary"
              danger
              size="middle"
              onClick={handleOpenModal}
              className={styles.sosButton}
            >
              Emergency SOS
            </Button>
            <Button type="primary" size="middle" icon={<LoginOutlined />}>
              <Link href="/login" className={styles.buttonLink}>
                Login
              </Link>
            </Button>
            <Button className={styles.signupButton} size="middle">
              <Link href="/roleSelectionPage" className={styles.buttonLink}>
                Sign Up
              </Link>
            </Button>
          </Space>
        </div>
      </div>
      <SupportModal open={isModalOpen} onClose={handleCloseModal} />
    </Header>
  );
};

export default ResilienceHeader;
