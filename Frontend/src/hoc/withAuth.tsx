"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getRole } from "@/utils/decoder";
interface LayoutProps {
  children?: React.ReactNode; // Children are optional to prevent errors
}

const withAuth = (WrappedLayout: React.ComponentType<LayoutProps>) => {
  const WithAuthWrapper: React.FC<LayoutProps> = ({ children, ...props }) => {
    const router = useRouter();
    useEffect(() => {
      const token = sessionStorage.getItem("jwt");
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const role = getRole(token);
        if (role === "null") {
          router.push("/login");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        router.push("/login");
      }
    }, [router]);
    return <WrappedLayout {...props}>{children}</WrappedLayout>;
  };

  return WithAuthWrapper;
};

export default withAuth;
