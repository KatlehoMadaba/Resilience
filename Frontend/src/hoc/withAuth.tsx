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
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const token = sessionStorage.getItem("jwt");
        const role = getRole(token);
        if (role === "generalsupporter") {
          router.push("/supporter");
        } else if (role === "professional") {
          router.push("/professional");
        } else if (role === "pastsurvivor") {
          router.push("/survivor");
        } else if (role === "immediatesurvivor") {
          router.push("/survivor");
        } else {
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
