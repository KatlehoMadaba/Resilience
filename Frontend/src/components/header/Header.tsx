"use client";
import React, { useState } from "react";
import { Layout, Button, Typography, Space } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import styles from "./Header.module.css";
import SupportModal from "../../components/supportModal/SupportModal";
import { useRouter } from "next/navigation";
const { Header } = Layout;
const { Title } = Typography;

const ResilienceHeader = ({ isAuthenticated = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const isLandingPage = pathname === "/"; 

  const openSupportModal = () => setIsModalOpen(true);
  const closeSupportModal = () => setIsModalOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const router = useRouter();
  return (
    <Header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer}>
          <div className={styles.logoWrapper}>
            <Image
              src="/images/logo.png"
              alt="Resilience Logo"
              width={32}
              height={32}
              className={styles.logo}
            />
            <Title level={3} className={styles.title}>
              Resilience
            </Title>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <Space size={24}>
            {isAuthenticated ? (
              <Link href="/dashboard" className={styles.navLink}>
                Dashboard
              </Link>
            ) : (
              isLandingPage && (
                <>
                  <Link href="/login">
                    <Button type="default" className={styles.loginBtn}>
                      Login
                    </Button>
                  </Link>
                  <Link href="register">
                    <Button type="primary" className={styles.signupBtn}>
                      Sign Up
                    </Button>
                  </Link>
                </>
              )
            )}
          </Space>
        </div>
        {/* SOS Button */}
        <Button
          danger
          type="primary"
          className={styles.sosButton}
          onClick={openSupportModal}
        >
          SOS
        </Button>
        <SupportModal open={isModalOpen} onClose={closeSupportModal} />

        {/* Mobile Menu Toggle Button */}
        <Button
          className={styles.mobileMenuBtn}
          type="text"
          icon={mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          onClick={toggleMobileMenu}
        />

        {/* Mobile Navigation */}
        <div
          className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ""}`}
        >
          <div className={styles.mobileNavLinks}>
            <Button
              href="/about"
              className={styles.mobileNavLink}
              onClick={() => router.back()}
            >
              Back
            </Button>
            {isAuthenticated ? (
              <Link
                href="/dashboard"
                className={styles.mobileNavLink}
                onClick={toggleMobileMenu}
              >
                Dashboard
              </Link>
            ) : (
              isLandingPage && (
                <div className={styles.mobileAuthBtns}>
                  <Link href="/login" onClick={toggleMobileMenu}>
                    <Button
                      type="default"
                      block
                      className={styles.mobileLoginBtn}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="register" onClick={toggleMobileMenu}>
                    <Button
                      type="primary"
                      block
                      className={styles.mobileSignupBtn}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Header>
  );
};

export default ResilienceHeader;
