"use client";
import { useEffect, useState } from "react";
import { Typography, Spin } from "antd";
import Image from "next/image";
import { getRole } from "@/utils/decoder";
import { Heart } from "lucide-react";
import styles from "./login-page.module.css";
import { useAuthState } from "@/providers/auth-provider";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import LoginForm from "../../../components/login-form/LoginForm";
import React from "react";
const { Title } = Typography;

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { isSuccess, isError, isPending } = useAuthState();
  useEffect(() => {
    const token = sessionStorage.getItem("jwt");

    if (isPending) setLoading(true);

    if (isError) {
      toast.error("Your authentication was unsuccessful!");
      setLoading(false);
    }

    if (isSuccess) {
      const role = getRole(token);
      // Login success → redirect to dashboard based on role
      if (role === "provider") {
        router.push("/provider-dashboard");
      } else if (role === "patient") {
        router.push("/patient-dashboard");
      } else {
        router.push("/");
      }

      setLoading(false);
    }
  }, [isPending, isError, isSuccess, router]);
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.authContainer}>
          <div className={styles.brandSide}>
            <div className={styles.logoWrapper}>
              <div className={styles.logoIcon}>
                <Heart className={styles.icon} fill="white" />
              </div>
              <span className={styles.logoText}>HealthConnect</span>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/healthpeople.png"
                alt="Healthcare Professional"
                width={380}
                height={320}
                priority
                className={styles.image}
              />
            </div>
            <div className={styles.brandContent}>
              <h1 className={styles.brandTitle}>Welcome</h1>
              <p className={styles.brandDescription}>
                Your secure gateway to smarter healthcare. Easily connect with
                providers, manage appointments, and stay in control of your
                health — all in one place.
              </p>
            </div>
          </div>
          <div className={styles.formSide}>
            <Spin spinning={loading} tip="Please hold on...">
              <div className={styles.formCard}>
                <Title level={2} className={styles.title}></Title>
                <Title level={4} className={styles.subtitle}>
                  Remeber you are never alone
                </Title>
                <LoginForm />
              </div>
            </Spin>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
