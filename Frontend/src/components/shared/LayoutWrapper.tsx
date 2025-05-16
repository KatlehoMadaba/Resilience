"use client";
import React, { useEffect, useState } from "react";
import { getRole } from "@/utils/decoder";
import dynamic from "next/dynamic";
import { Spin } from "antd";
// Dynamically import layouts
const SurvivorLayout = dynamic(() => import("@/app/survivor/layout"), {
  loading: () => <div>Loading...</div>,
});

const ProfessionalLayout = dynamic(
  () => import("@/app/survivor/professional/layout"),
  {
    loading: () => <div>Loading...</div>,
  }
);

const LayoutWrapper = ({ children }) => {
  const [userRole, setUserRole] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = sessionStorage.getItem("jwt");
        if (!token) {
          console.error("No JWT token found");
          setLoading(false);
          return;
        }

        const role = await getRole(token);
        setUserRole(role);
      } catch (error) {
        console.error("Error fetching user role:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, []);

  if (loading) {
    return (
      <div>
        <Spin />
      </div>
    );
  }
  if (userRole === "professional") {
    return <ProfessionalLayout>{children}</ProfessionalLayout>;
  } else {
    return <SurvivorLayout>{children}</SurvivorLayout>;
  }
};

export default LayoutWrapper;
