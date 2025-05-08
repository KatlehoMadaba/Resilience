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
} from "../../providers/location-provider";
import {
  usePoliceStationState,
  usePoliceStationActions,
} from "@/providers/police-provider";

const { Title, Link } = Typography;

const Nearbypolice = () => {
  const router = useRouter();
  const { getLocation } = useLocationActions();
  const { location, isPending, isSuccess, isError } = useLocationState();
  const { isPending: isPoliceSuccess } = usePoliceStationState();
  const { getPoliceStations } = usePoliceStationActions();
  const { PoliceStations } = usePoliceStationState();
  
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        await getLocation();
        console.log("Locations:",Location)
      } catch (error) {
        console.error("Failed to get location:", error);
      }
    };

    fetchLocation();
  }, []);

  useEffect(() => {
    const fetchPoliceStations = async () => {
      try {
        if (location) {
          debugger;
          await getPoliceStations(location);
        }
      } catch (error) {
        console.error("Failed to fetch police:", error);
      } finally {
        console.log("This are the police", PoliceStations);
      }
    };

    fetchPoliceStations();
  }, [isSuccess, location]);

  const handleNextClick = () => {
    router.push("/imd");
  };

  return (
    <div style={{ padding: "2rem", minHeight: "100vh" }}>
      {isPoliceSuccess && <Spin size="large" />}
      <Title level={3} style={{ marginBottom: "2rem" }}>
        Nearby Police Staions
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
          {PoliceStations.length > 0 ? (
            PoliceStations.map((PoliceStation, index) => (
              <Card key={index} bordered style={{ marginBottom: "1rem" }}>
                <Title level={5}>{PoliceStation.name}</Title>

                <p>
                  <PhoneOutlined style={{ marginRight: 8 }} />
                  Contact: {PoliceStation.phoneNumber}
                </p>
                <p>
                  <EnvironmentOutlined style={{ marginRight: 8 }} />
                  Location: {PoliceStation.address}
                </p>
                <p>
                  <EnvironmentOutlined style={{ marginRight: 8 }} />
                  Operating Hours:{" "}
                  {PoliceStation.operatingHours ? "24 Hours" : "Unknown"}
                </p>

                <p>
                  <InfoCircleOutlined style={{ marginRight: 8 }} />
                  <Link href={PoliceStation.googleMapsUrl} target="_blank">
                    View on Google Maps
                  </Link>
                </p>
              </Card>
            ))
          ) : (
            <p style={{ color: "red" }}>No nearby police found within 15 km.</p>
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

export default Nearbypolice;
