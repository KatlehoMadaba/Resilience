"use client";
import React, { useEffect, useState } from "react";
import { Typography, Spin } from "antd";
import Image from "next/image";
import { Heart } from "lucide-react";
import styles from "../../../../components/register-forms/immediateS/register-page.module.css";
import ImmdeiateRegisterForm from "../../../../components/register-forms/immediateS/page";
import { useAuthState } from "@/providers/auth-provider";

const { Title } = Typography;

const SignupPage = () => {
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

          {/* Form Section */}
          <div className={styles.formSide}>
            <Spin spinning={loading} tip="Creating your account...">
              <div className={styles.formCard}>
                <Title level={2} className={styles.title}>
                  Create Your Account
                </Title>
                <Title level={4} className={styles.subtitle}>
                  You are never alone take the first step
                </Title>
                <ImmdeiateRegisterForm />
              </div>
            </Spin>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignupPage;
