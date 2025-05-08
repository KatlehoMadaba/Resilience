"use client";

import React, { useEffect} from "react";
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
} from "../../providers/location-provider";
import {
  useMedicalCentreState,
  useMedicalCentreActions,
} from "@/providers/medicalCenter-provider";

const { Title, Link } = Typography;

const NearbyHospitals = () => {
  const router = useRouter();
  const { getLocation } = useLocationActions();
  const { location, isPending, isSuccess, isError } = useLocationState();
  const { isPending: isMedicalPending} =
    useMedicalCentreState();
  const { getMedicalCentres } = useMedicalCentreActions();
  const { medicalCentres } = useMedicalCentreState();
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        await getLocation();
      } catch (error) {
        console.error("Failed to get location:", error);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchMedicalCentres = async () => {
      try {
        if (location) {
          await getMedicalCentres(location);
        }
      } catch (error) {
        console.error("Failed to fetch medical centres:", error);
      }
    };

    fetchMedicalCentres();
  }, [isSuccess, location]);

  const handleNextClick = () => {
    router.push("/policeStations");
  };

  return (
    <div style={{ padding: "2rem", minHeight: "100vh" }}>
      {isMedicalPending && <Spin size="large" />}
      <Title level={3} style={{ marginBottom: "2rem" }}>
        Nearby Hospitals with Rape Kits
      </Title>
      {/* Loading location */}
      {isPending && (
        <div style={{ textAlign: "center", marginBottom: 16 }}></div>
      )}
      {/* Location error */}
      {isError && (
        <div style={{ color: "red", marginBottom: 16 }}>
          Unable to access your location. Please enable location permissions in
          your browser settings.
        </div>
      )}
      (
      <Row gutter={[32, 32]}>
        <Col xs={24} md={14}>
          {medicalCentres.length > 0 ? (
            medicalCentres.map((medicalCentre, index) => (
              <Card key={index} bordered style={{ marginBottom: "1rem" }}>
                <Title level={5}>{medicalCentre.name}</Title>

                <p>
                  <PhoneOutlined style={{ marginRight: 8 }} />
                  Contact: {medicalCentre.phoneNumber}
                </p>
                <p>
                  <EnvironmentOutlined style={{ marginRight: 8 }} />
                  Location: {medicalCentre.address}
                </p>
                <p>
                  <EnvironmentOutlined style={{ marginRight: 8 }} />
                  Operating Hours:{" "}
                  {medicalCentre.operatingHours ? "24 Hours" : "Unknown"}
                </p>

                <p>
                  <InfoCircleOutlined style={{ marginRight: 8 }} />
                  <Link href={medicalCentre.googleMapsUrl} target="_blank">
                    View on Google Maps
                  </Link>
                </p>
              </Card>
            ))
          ) : (
            <p style={{ color: "red" }}>
              No nearby hospitals found within 15 km.
            </p>
          )}
        </Col>

        {/* Right column - location display */}
        <Col xs={24} md={10}>
          <div
            style={{
              backgroundColor: "#8f997f",
              height: 250,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
              flexDirection: "column",
              color: "#fff",
            }}
          >
            <EnvironmentOutlined style={{ fontSize: 64 }} />
            {isSuccess && location ? (
              <p style={{ marginTop: 12 }}>
                Next I will help you find the nearest Police Station
                <Button
                  type="primary"
                  style={{ background: "#4b5e3f", borderColor: "#4b5e3f" }}
                  onClick={handleNextClick}
                >
                  Next
                </Button>
              </p>
            ) : (
              <p style={{ marginTop: 12 }}>Location not yet available</p>
            )}
          </div>
        </Col>
      </Row>
      )
    </div>
  );
};

export default NearbyHospitals;
