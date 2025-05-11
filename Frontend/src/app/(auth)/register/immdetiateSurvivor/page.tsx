"use client";
import React, { useEffect, useState } from "react";
import { Typography, Spin, Alert } from "antd";
import Image from "next/image";
import { Heart } from "lucide-react";
import styles from "./register-page.module.css";
import ImmediateRegisterForm from "../../../../components/register-forms/survivor/immediateSurvivor";
import { useAuthState } from "@/providers/auth-provider";
const { Title, Paragraph } = Typography;

const ImmediateSurvivorSignupPage = () => {
  const [loading, setLoading] = useState(false);
  const { isPending } = useAuthState();

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
                <Heart className={styles.icon} fill="white" />
              </div>
              <span className={styles.logoText}>Welcome to Resilience</span>
            </div>

            <div className={styles.brandContent}>
              <Title level={2} className={styles.brandTitle}>
                You Are Not Alone
              </Title>
              <Paragraph className={styles.brandMessage}>
                Taking this step is an act of courage. We are here to provide the
                support, resources, and guidance you need during this critical
                time.
              </Paragraph>

              <div className={styles.testimonial}>
                <Paragraph className={styles.quote}>
                  Having a safe place to turn to made all the difference in my
                  journey
                </Paragraph>
                <Paragraph className={styles.quoteAuthor}>
                  — Anonymous Survivor
                </Paragraph>
              </div>

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

            <div className={styles.safetyInfo}>
              <Alert
                message="Safety First"
                description="This page has a quick exit button. Press ESC key at any time if you need to leave quickly."
                type="info"
                showIcon
                className={styles.safetyAlert}
              />
            </div>
          </div>

          {/* Form Section */}
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
                <ImmediateRegisterForm />
              </div>
            </Spin>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImmediateSurvivorSignupPage;
