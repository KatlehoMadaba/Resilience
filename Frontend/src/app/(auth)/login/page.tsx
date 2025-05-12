"use client";
import { useEffect, useState } from "react";
import { getRole } from "@/utils/decoder";
import { useAuthState } from "@/providers/auth-provider";
import { toast } from "react-toastify";
import React from "react";
import { Typography, Card, Row, Col, Divider, Spin } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import LoginForm from "@/components/login-form/LoginForm";
import styles from "./login-page.module.css";
import { useRouter } from "next/navigation";
const { Title } = Typography;

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { isSuccess, isError, isPending } = useAuthState();
  const handleLoginSuccess = () => {};
  useEffect(() => {
    const token = sessionStorage.getItem("jwt");
    if (!token) {
      router.push("/login");
      return;
    }
    if (isPending) setLoading(true);
    if (isError) {
      toast.error("Your authentication was unsuccessful!");
      setLoading(false);
    }
    if (isSuccess) {
      const role = getRole(token);
      if (role === "generalsupporter") {
        router.push("/supporter");
      } else if (role === "professional") {
        router.push("/professional");
      } else if (role === "pastsurvivor") {
        router.push("/survivor");
      } else if (role === "immediatesurvivor") {
        router.push("/survivor");
      }
      setLoading(false);
    }
  }, [isPending, isError, router]);

  return (
    <Spin spinning={loading}>
      <div className={styles.loginPageContainer}>
        <Row justify="center" align="middle" className={styles.loginRow}>
          <Col xs={22} sm={18} md={12} lg={10} xl={8}>
            <Link href="/" className={styles.backLink}>
              <ArrowLeftOutlined /> Back to Home
            </Link>

            <Card className={styles.loginCard}>
              <div className={styles.logoContainer}>
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

              <Title level={2} className={styles.loginTitle}>
                Welcome Back
              </Title>
              <p className={styles.loginDescription}>
                Sign in to access your account and continue your healing journey
                with Resilience.
              </p>

              <LoginForm onLoginSuccess={handleLoginSuccess} />

              <Divider plain className={styles.divider}>
                Dont have an account?
              </Divider>

              <div className={styles.signupSection}>
                <Link href="/roleSelectionPage" className={styles.signupLink}>
                  Create a new account
                </Link>
              </div>
            </Card>

            <div className={styles.safetyExit}>
              <p className={styles.safetyText}>Need to leave quickly?</p>
              <Link href="https://www.google.com">
                <div className={styles.exitButton}>Quick Exit</div>
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Spin>
  );
};

export default LoginPage;
