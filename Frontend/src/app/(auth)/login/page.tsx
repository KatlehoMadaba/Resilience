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
  console.log()
  useEffect(() => {
    const token = sessionStorage.getItem("jwt");

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
        router.push("/dashboard");
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
