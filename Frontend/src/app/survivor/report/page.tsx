"use client";
import React, { useEffect, useState } from "react";
import { Spin, Button, Card, Typography } from "antd";
import { useUserActions, useUserState } from "@/providers/users-providers";
import {
  useSurvivorActions,
  useSurvivorState,
} from "@/providers/survivors-provider";
import { useSexualAssaultReportActions } from "@/providers/report-provider";
import { ISexualAssaultReport } from "@/providers/report-provider/models";
import SexualAssaultReportForm from "@/components/report/SexualAssaultReportForm";
import { Container } from "@/components/report/styles";

const { Title, Text } = Typography;

const ReportPage = () => {
  const [loading, setLoading] = useState(true);
  const { getCurrentUser } = useUserActions();
  const { getCurrentSurvivor } = useSurvivorActions();
  const { isPending, isError } = useUserState();

  const { currentSurvivor } = useSurvivorState();
  const { createSexualAssaultReport } = useSexualAssaultReportActions();

  useEffect(() => {
    if (!currentSurvivor) fetchSurvivorOnReload();
  }, []);

  useEffect(() => {
    setLoading(isPending);
    if (isError) setLoading(false);
  }, [isPending, isError]);

  const fetchSurvivorOnReload = async () => {
    try {
      setLoading(true);
      const user = await getCurrentUser();
      await getCurrentSurvivor(user.id);
    } catch (err) {
      console.error("Error loading survivor:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (report: ISexualAssaultReport) => {
    const completeReport = {
      ...report,
      personId: currentSurvivor?.id,
      encryptedContent: "none",
      reportStatus: 1,
      fileReference: "date_time",
      isSharedWithAuthorities: true,
      sharedDate: new Date().toISOString(),
    };
    createSexualAssaultReport(completeReport);
  };

  const handleDownloadPdf = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generateReport", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ personId: currentSurvivor?.id }),
      });

      if (!res.ok) throw new Error(`Status: ${res.status}`);

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "PoliceReport.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Download failed:", err);
    }
    setLoading(false);
  };

  return (
    <Spin spinning={loading}>
      <Container>
        <Title level={2}>File a Sexual Assault Report</Title>
        <Text type="secondary">
          Your information is confidential and securely stored.
        </Text>

        <SexualAssaultReportForm onSubmit={handleSubmit} loading={loading} />

        <Card style={{ marginTop: 32 }}>
          <Title level={4}>Need a PDF?</Title>
          <Text>
            You can generate a downloadable copy of your report to submit to law
            enforcement or keep for personal records.
          </Text>
          <br />
          <Button
            type="primary"
            onClick={handleDownloadPdf}
            style={{ marginTop: 16 }}
          >
            Generate & Download Report PDF
          </Button>
        </Card>
      </Container>
    </Spin>
  );
};

export default ReportPage;
