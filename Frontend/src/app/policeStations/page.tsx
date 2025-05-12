"use client";

import React, { useEffect } from "react";
import { Row, Col, Card, Typography, Button, Spin } from "antd";
import {
  EnvironmentOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import {
  useLocationActions,
  useLocationState,
} from "../../providers/location-provider";
import {
  usePoliceStationState,
  usePoliceStationActions,
} from "@/providers/police-provider";
import { usePoliceStyles } from "./styles"; 

const { Title, Link, Paragraph } = Typography;

const Nearbypolice = () => {
  const router = useRouter();
  const { getLocation } = useLocationActions();
  const { location, isSuccess, isError } = useLocationState();
  const { getPoliceStations } = usePoliceStationActions();
  const { PoliceStations, isPending: isPolicePending } =
    usePoliceStationState();
  const { styles } = usePoliceStyles(); 

  useEffect(() => {
    getLocation().catch(console.error);
  }, []);

  useEffect(() => {
    if (location && isSuccess) {
      getPoliceStations(location).catch(console.error);
    }
  }, [location, isSuccess]);

  const handleNextClick = () => {
    router.push("/register");
  };

  return (
    <div className={styles.page}>
      <Title className={styles.title}>Nearby Police Stations</Title>
      <Paragraph className={styles.subtitle}>
        You are doing incredibly well. We’ve found stations where you can report
        your experience safely and privately.
      </Paragraph>

      {isPolicePending && (
        <div className={styles.spinnerWrapper}>
          <Spin size="large" />
        </div>
      )}

      {isError && (
        <Paragraph className={styles.error}>
          Unable to access your location. Please enable permissions in your
          browser settings.
        </Paragraph>
      )}

      <Row gutter={[32, 32]}>
        <Col xs={24} md={14}>
          {PoliceStations.length > 0 ? (
            PoliceStations.map((station, index) => (
              <Card key={index} className={styles.card} variant="outlined">
                <Title level={4} className={styles.cardTitle}>
                  {station.name}
                </Title>
                <p className={styles.info}>
                  <PhoneOutlined className={styles.icon} />
                  <strong>Contact:</strong> {station.phoneNumber}
                </p>
                <p className={styles.info}>
                  <EnvironmentOutlined className={styles.icon} />
                  <strong>Address:</strong> {station.address}
                </p>
                <p className={styles.info}>
                  <ClockCircleOutlined className={styles.icon} />
                  <strong>Hours:</strong>{" "}
                  {station.operatingHours ? "24 Hours" : "Unknown"}
                </p>
                <p className={styles.info}>
                  <InfoCircleOutlined className={styles.icon} />
                  <Link href={station.googleMapsUrl} target="_blank">
                    View on Google Maps
                  </Link>
                </p>
              </Card>
            ))
          ) : (
            <Paragraph className={styles.error}>
              No police stations found within 15 km.
            </Paragraph>
          )}
        </Col>

        <Col xs={24} md={10}>
          <div className={styles.locationBox}>
            <EnvironmentOutlined className={styles.locationIcon} />
            {isSuccess && location ? (
              <>
                <p className={styles.supportiveMessage}>
                  You are almost done. Next, you can choose to register your
                  experience and get further help.
                </p>
                <Button className={styles.nextButton} onClick={handleNextClick}>
                  Next
                </Button>
              </>
            ) : (
              <p className={styles.supportiveMessage}>Location not available</p>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Nearbypolice;
