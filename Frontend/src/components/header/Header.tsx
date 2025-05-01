
"use client"
import React from 'react';
import { Layout, Button, Typography, Space } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

const { Header } = Layout;
const { Title } = Typography;

const ResilienceHeader = ({ isAuthenticated = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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
            <Title level={3} className={styles.title}>Resilience</Title>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <Space size={24}>
            <Link href="/resources" className={styles.navLink}>Resources</Link>
            <Link href="/support" className={styles.navLink}>Support</Link>
            <Link href="/about" className={styles.navLink}>About Us</Link>
            {isAuthenticated ? (
              <Link href="/dashboard" className={styles.navLink}>Dashboard</Link>
            ) : (
              <>
                <Link href="/login">
                  <Button type="default" className={styles.loginBtn}>Login</Button>
                </Link>
                <Link href="/signup">
                  <Button type="primary" className={styles.signupBtn}>Sign Up</Button>
                </Link>
              </>
            )}
          </Space>
        </div>
        {/* SOS Button - Always visible */}
          <Button danger type="primary" className={styles.sosButton}>SOS</Button>
        {/* Mobile Menu Button */}
        <Button 
          className={styles.mobileMenuBtn} 
          type="text" 
          icon={mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />} 
          onClick={toggleMobileMenu}
        />

        {/* Mobile Navigation Overlay */}
        <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileNavLinks}>
            <Link href="/resources" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Resources</Link>
            <Link href="/support" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Support</Link>
            <Link href="/about" className={styles.mobileNavLink} onClick={toggleMobileMenu}>About Us</Link>
            {isAuthenticated ? (
              <Link href="/dashboard" className={styles.mobileNavLink} onClick={toggleMobileMenu}>Dashboard</Link>
            ) : (
              <div className={styles.mobileAuthBtns}>
                <Link href="/login" onClick={toggleMobileMenu}>
                  <Button type="default" block className={styles.mobileLoginBtn}>Login</Button>
                </Link>
                <Link href="/signup" onClick={toggleMobileMenu}>
                  <Button type="primary" block className={styles.mobileSignupBtn}>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Header>
  );
};

export default ResilienceHeader;