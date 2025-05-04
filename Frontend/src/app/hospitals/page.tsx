"use client";
import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import {
  EnvironmentOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
const { Title, Text } = Typography;

const hospitals = [
  {
    id:"1",
    name: "City Hospital",
    services: "Rape kits available, Counselling services",
    contact: "011 000 0000",
    location: "Guild Road",
  },
  { name: "City Hospital", services: "Same as above", contact: "011 000 0000", location: "Guild Road" },
  { name: "City Hospital", services: "Same as above", contact: "011 000 0000", location: "Guild Road" },
];

const NearbyHospitals = () => {
    const router = useRouter();
    const handleNextClick = () => {
        router.push("/policeStations");
      };
  return (
    <div style={{ padding: "2rem", background: "#f5ecdd", minHeight: "100vh" }}>
      <Title level={3} style={{ marginBottom: "2rem" }}>
        Nearby Hospitals with Rape Kits
      </Title>

      <Row gutter={[32, 32]}>
        <Col xs={24} md={14}>
          {hospitals.map((hospital, index) => (
            <Card key={index} bordered style={{ marginBottom: "1rem" }}>
              <Title level={5}>{hospital.name}</Title>
              <p>
                <InfoCircleOutlined style={{ marginRight: 8 }} />
                {hospital.services}
              </p>
              <p>
                <PhoneOutlined style={{ marginRight: 8 }} />
                Contact: {hospital.contact}
              </p>
              <p>
                <EnvironmentOutlined style={{ marginRight: 8 }} />
                Location: {hospital.location}
              </p>
            </Card>
          ))}
        </Col>

        {/* Right Column - Map Icon */}
        <Col xs={24} md={10}>
          <div
            style={{
              backgroundColor: "#8f997f",
              height: 250,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 8,
            }}
          >
            <EnvironmentOutlined style={{ fontSize: 64 }} />
          </div>
        </Col>
      </Row>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Button type="primary" style={{ background: "#4b5e3f", borderColor: "#4b5e3f"  }}
          onClick={handleNextClick}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default NearbyHospitals;
