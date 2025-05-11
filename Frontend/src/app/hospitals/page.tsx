"use client";

import React, { useEffect } from "react";
import { Row, Col, Card, Typography, Button, Spin } from "antd";
import {
  EnvironmentOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import {
  useLocationActions,
  useLocationState,
} from "@/providers/location-provider";
import {
  useMedicalCentreState,
  useMedicalCentreActions,
} from "@/providers/medicalCenter-provider";
import { useHospitalStyles } from "./styles"; // import new styles

const { Title, Link, Paragraph } = Typography;

const NearbyHospitals = () => {
  const router = useRouter();
  const { getLocation } = useLocationActions();
  const { location, isSuccess, isError } = useLocationState();
  const { getMedicalCentres } = useMedicalCentreActions();
  const { medicalCentres, isPending: isMedicalPending } =
    useMedicalCentreState();
  const { styles } = useHospitalStyles(); // use the styles hook

  useEffect(() => {
    getLocation().catch(console.error);
  }, []);

  useEffect(() => {
    if (location && isSuccess) {
      getMedicalCentres(location).catch(console.error);
    }
  }, [location, isSuccess]);

  const handleNextClick = () => {
    router.push("/policeStations");
  };

  return (
    <div className={styles.page}>
      <Title className={styles.title}>Nearby Hospitals</Title>
      <Paragraph className={styles.subtitle}>
        These hospitals are equipped to support you with{" "}
        <strong>rape kits</strong> and <strong>trauma care</strong>. You deserve
        compassion and help — every step of the way.
      </Paragraph>

      {isMedicalPending && (
        <div className={styles.spinnerWrapper}>
          <Spin size="large" />
        </div>
      )}

      {isError && (
        <Paragraph className={styles.error}>
          Location access failed. Please enable it in your browser settings.
        </Paragraph>
      )}

      <Row gutter={[32, 32]}>
        <Col xs={24} md={14}>
          {medicalCentres.length > 0 ? (
            medicalCentres.map((medicalCentre, index) => (
              <Card key={index} className={styles.card}>
                <Title level={4} className={styles.cardTitle}>
                  {medicalCentre.name}
                </Title>
                <p className={styles.info}>
                  <PhoneOutlined className={styles.icon} />
                  <strong>Contact:</strong> {medicalCentre.phoneNumber}
                </p>
                <p className={styles.info}>
                  <EnvironmentOutlined className={styles.icon} />
                  <strong>Address:</strong> {medicalCentre.address}
                </p>
                <p className={styles.info}>
                  <EnvironmentOutlined className={styles.icon} />
                  <strong>Hours:</strong>{" "}
                  {medicalCentre.operatingHours ? "24 Hours" : "Unknown"}
                </p>
                <p className={styles.info}>
                  <InfoCircleOutlined className={styles.icon} />
                  <Link href={medicalCentre.googleMapsUrl} target="_blank">
                    View on Google Maps
                  </Link>
                </p>
              </Card>
            ))
          ) : (
            <Paragraph className={styles.error}>
              No hospitals found nearby (within 15 km).
            </Paragraph>
          )}
        </Col>

        <Col xs={24} md={10}>
          <div className={styles.locationBox}>
            <EnvironmentOutlined className={styles.locationIcon} />
            {isSuccess && location ? (
              <>
                <p className={styles.supportiveMessage}>
                  When you are ready, we will help you find the{" "}
                  <strong>nearest police station</strong>.
                </p>
                <Button className={styles.nextButton} onClick={handleNextClick}>
                  Next
                </Button>
              </>
            ) : (
              <p className={styles.supportiveMessage}>
                Location not yet available.
              </p>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NearbyHospitals;
