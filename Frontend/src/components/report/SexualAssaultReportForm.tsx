"use client";
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Switch,
  Steps,
  Row,
  Col,
  Card,
  Space,
} from "antd";
import { ISexualAssaultReport } from "@/providers/report-provider/models";
import { Container, SectionTitle } from "./styles";
const { Step } = Steps;

interface Props {
  onSubmit: (report: ISexualAssaultReport) => void;
  loading?: boolean;
}

const SexualAssaultReportForm: React.FC<Props> = ({ onSubmit, loading }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();

  const next = () => setCurrentStep(currentStep + 1);
  const prev = () => setCurrentStep(currentStep - 1);

  const handleFinish = (values) => {
    const formattedValues: ISexualAssaultReport = {
      ...values,
      dateOfBirth: values.dateOfBirth?.toISOString(),
      incidentDateTime: values.incidentDateTime?.toISOString(),
    };
    onSubmit(formattedValues);
  };

  const steps = [
    {
      title: "Victim Info",
      content: (
        <>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="fullName"
                label="Full Name"
                rules={[{ required: true }]}
              >
                <Input placeholder="Enter full name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item name="idNumber" label="ID Number">
                <Input placeholder="Enter ID number" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item name="dateOfBirth" label="Date of Birth">
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item name="occupation" label="Occupation">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name="address" label="Address">
                <Input.TextArea rows={2} />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name="phoneNumber" label="Phone Number">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </>
      ),
    },
    {
      title: "Incident & Suspect",
      content: (
        <>
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <Form.Item
                name="incidentDateTime"
                label="Date & Time of Incident"
              >
                <DatePicker showTime style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item name="location" label="Location of Incident">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="leadingEventsDescription"
                label="Events Leading to Incident"
              >
                <Input.TextArea rows={3} />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="isSuspectKnown"
                label="Do you know the suspect?"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item name="suspectName" label="Suspect Name">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item name="suspectDescription" label="Suspect Description">
                <Input.TextArea rows={2} />
              </Form.Item>
            </Col>
          </Row>
        </>
      ),
    },
    {
      title: "Evidence & Support",
      content: (
        <>
          <Row gutter={16}>
            <Col xs={24}>
              <Form.Item
                name="assaultDescription"
                label="Description of Assault"
              >
                <Input.TextArea rows={3} />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="actionsTaken"
                label="Actions Taken After Incident"
              >
                <Input.TextArea rows={2} />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                name="injuries"
                label="Were there injuries?"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                name="receivedMedicalAttention"
                label="Received Medical Attention?"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                name="wantsCounsellor"
                label="Would like a counsellor?"
                valuePropName="checked"
              >
                <Switch />
              </Form.Item>
            </Col>
          </Row>
        </>
      ),
    },
  ];

  return (
    <Container>
      <SectionTitle level={3}>Sexual Assault Report Form</SectionTitle>
      <Steps current={currentStep} size="small" responsive>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>

      <Card style={{ marginTop: 24 }}>
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          {steps[currentStep].content}

          <Space style={{ marginTop: 24 }}>
            {currentStep > 0 && (
              <Button onClick={prev} disabled={loading}>
                Back
              </Button>
            )}
            {currentStep < steps.length - 1 && (
              <Button type="primary" onClick={next} disabled={loading}>
                Next
              </Button>
            )}
            {currentStep === steps.length - 1 && (
              <Button type="primary" htmlType="submit" loading={loading}>
                Submit Report
              </Button>
            )}
          </Space>
        </Form>
      </Card>
    </Container>
  );
};

export default SexualAssaultReportForm;
