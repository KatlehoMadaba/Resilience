"use client";
import React, { useEffect, useState } from "react";
import { Spin, Button } from "antd";
import { useUserActions, useUserState } from "@/providers/users-providers";
import {
  useSurvivorActions,
  useSurvivorState,
} from "@/providers/survivors-provider";
import { useSexualAssaultReportActions } from "@/providers/report-provider";
import { ISexualAssaultReport } from "@/providers/report-provider/models";

const ReportPage = () => {
  const [loading, setLoading] = useState(true);
  const { getCurrentUser } = useUserActions();
  const { getCurrentSurvivor } = useSurvivorActions();
  const { isPending, isError } = useUserState();
  const { currentSurvivor } = useSurvivorState();
  const { createSexualAssaultReport } = useSexualAssaultReportActions();

  useEffect(() => {
    if (currentSurvivor == null) fetchSurvivorOnReload();
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

  const sexualAssaultReport: ISexualAssaultReport = {
    personId: "0196cf43-115d-731a-8875-2a6367aede2f",
    fullName: "Emma Johnson",
    idNumber: "9876543210",
    dateOfBirth: new Date("1990-05-12T00:00:00Z").toISOString(),
    address: "123 Elm Street, Cityville, Country",
    phoneNumber: "+27 111 222 3333",
    occupation: "Journalist",
    incidentDateTime: new Date("2025-05-13T22:10:00Z").toISOString(),
    location: "Central Park, Cityville",
    aloneOrWithSomeone: false,
    leadingEventsDescription:
      "Walking home when an unknown individual approached aggressively",
    isSuspectKnown: true,
    suspectName: "Michael Doe",
    suspectDescription:
      "Tall, muscular, short brown hair, wearing dark jeans and a gray hoodie",
    weaponOrThreats: "Threatened verbally, no visible weapon",
    assaultDescription: "Pushed against a fence and forcefully restrained",
    injuries: true,
    wordsSpokenBySuspect: "Stay quiet and don’t move",
    actionsTaken: "Shouted for help, security intervened",
    changedClothesOrShowered: false,
    clothesKept: true,
    witnessPresent: true,
    witnessDetails: "Security guard witnessed the incident and intervened",
    cctvAvailable: true,
    isOtherEvidence: true,
    otherEvidenceDescription: "CCTV footage from a nearby storefront",
    receivedMedicalAttention: true,
    willingForensicExam: true,
    feelsSafe: false,
    wantsCounsellor: true,
    prefersFemaleOfficer: true,
    reportStatus: 1,
    encryptedContent: "none",
    isSharedWithAuthorities: true,
    sharedDate: new Date("2025-05-12T00:00:00Z").toISOString(),
    fileReference: "date_time",
  };

  const oncclikReport = () => {
    createSexualAssaultReport(sexualAssaultReport);
    console.log("from values", sexualAssaultReport);
  };

  const handleDownloadPdf = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/generateReport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sexualAssaultReport),
      });

      if (!res.ok) {
        throw new Error(`Failed to generate report. Status: ${res.status}`);
      }

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
      <Button onClick={oncclikReport}>Button</Button>
     
      <Spin spinning={loading}>
        <h1>Sexual Assault Report</h1>
        <Button type="primary" onClick={handleDownloadPdf}>
          Generate & Download Report PDF
        </Button>
      </Spin>
      {/* <Layout>
        <Content className={styles.content}>
          <SexualAssaultReportForm onSubmit={handleReportSubmit}   />
          <Card style={{ marginTop: "1rem" }}>
            <Title level={5}>Your Reports</Title>
            <Text>
              This section will display a list of generated or submitted
              reports.
            </Text>
          </Card>
        </Content>
      </Layout> */}
    </Spin>
  );
};

export default ReportPage;
