"use client";
import React from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import {
  EnvironmentOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Title } = Typography;

const policeStations = [
  {
    name: "Central Police Station",
    services: "Rape kits available, Trauma counseling",
    contact: "011 100 2000",
    location: "Civic Centre Rd",
  },
  {
    name: "Northview Police Station",
    services: "24/7 Support, Confidential services",
    contact: "011 300 4000",
    location: "North Road",
  },
  {
    name: "Lakeside Police Station",
    services: "On-site rape kits, Female officers available",
    contact: "011 900 8000",
    location: "Lakeview Drive",
  },
];

const NearbyPoliceStations = () => {
     const router = useRouter();
     const handleNextClick = () => {
        router.push("/imd");
      };
    
  return (
    
    <div style={{ padding: "2rem", background: "#f5ecdd", minHeight: "100vh" }}>
      <Title level={3} style={{ marginBottom: "2rem" }}>
        Police Stations near you.
      </Title>

      <Row gutter={[32, 32]}>
        {/* Left Column - Police Station Cards */}
        <Col xs={24} md={14}>
          {policeStations.map((station, index) => (
            <Card key={index} bordered style={{ marginBottom: "1rem" }}>
              <Title level={5}>{station.name}</Title>
              <p>
                <InfoCircleOutlined style={{ marginRight: 8 }} />
                {station.services}
              </p>
              <p>
                <PhoneOutlined style={{ marginRight: 8 }} />
                Contact: {station.contact}
              </p>
              <p>
                <EnvironmentOutlined style={{ marginRight: 8 }} />
                Location: {station.location}
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

      {/* Next Button */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Button type="primary" style={{ background: "#4b5e3f", borderColor: "#4b5e3f" }}  onClick={handleNextClick}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default NearbyPoliceStations;
