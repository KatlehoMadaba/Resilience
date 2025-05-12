"use client";
import React, { useState, useEffect } from "react";
import { Typography, Spin} from "antd";
import Image from "next/image";
import ImmediateSurvivorSignupPage from "@/components/register-forms/survivor/immediateSurvivor";
import { useAuthState } from "@/providers/auth-provider";
import { useSignUpPageStyles } from "./styles"; 

const { Title, Paragraph } = Typography;

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const { isPending } = useAuthState();
  const { styles } = useSignUpPageStyles();

  // Loading spinner state
  useEffect(() => {
    if (isPending) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [isPending]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.authContainer}>
          {/* Brand Section */}
          <div className={styles.brandSide}>
            <div className={styles.logoWrapper}>
              <div className={styles.logoIcon}>
                {/* Place your logo here */}
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
              <span className={styles.logoText}>Resilience</span>
            </div>
            <div className={styles.brandContent}>
              <Title level={2} className={styles.brandTitle}>
                You Are Not Alone
              </Title>
              <Paragraph className={styles.brandMessage}>
                Taking this step is an act of courage. We are here to provide
                the support, resources, and guidance you need during this
                critical time.
              </Paragraph>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/neverAlone.png"
                  alt="holding hands"
                  width={380}
                  height={320}
                  priority
                  className={styles.image}
                />
              </div>
            </div>
          </div>
          <div className={styles.formSide}>
            <Spin
              spinning={loading}
              tip="Creating your account..."
              className={styles.spinnerContainer}
            >
              <div className={styles.formCard}>
                <Title level={2} className={styles.title}>
                  Create Your Account
                </Title>
                <Paragraph className={styles.subtitle}>
                  Taking the first step on your healing journey
                </Paragraph>
                <ImmediateSurvivorSignupPage />
              </div>
            </Spin>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
