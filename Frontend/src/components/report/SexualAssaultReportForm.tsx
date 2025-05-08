import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Radio,
  DatePicker,
  Row,
  Col,
  Typography,
  Divider
} from "antd";
import { useForm } from "antd/lib/form/Form";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const { TextArea } = Input;
const { Title, Paragraph } = Typography;

interface SexualAssaultReportFormProps {
  onSubmit: (values) => void;
}

const SexualAssaultReportForm: React.FC<SexualAssaultReportFormProps> = ({ onSubmit }) => {
  const [form] = useForm();
  const [isSuspectKnown, setIsSuspectKnown] = useState<boolean>(false);

  const onSuspectKnownChange = (e: CheckboxChangeEvent) => {
    setIsSuspectKnown(e.target.checked);
  };

  const handleFormSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <div style={{ maxWidth: 850, margin: "0 auto", padding: "24px" }}>
      <Title level={2} style={{ textAlign: "center" }}>
        Let me guide you through your report
      </Title>
      <Paragraph style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 24px" }}>
        Please complete this form to the best of your ability. Your responses will help ensure the right support and care.
      </Paragraph>

      <Form
        form={form}
        layout="vertical"
        onFinish={handleFormSubmit}
        initialValues={{ aloneOrWithSomeone: "Alone" }}
      >
        {/* Victim Details */}
        <Divider orientation="left">Victim Information</Divider>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="fullName"
              label="Full Name"
              rules={[{ required: true, message: "Please enter your full name" }]}
            >
              <Input placeholder="Jane Doe" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="idNumber"
              label="Identification Number"
              rules={[{ required: true, message: "Please enter your ID number" }]}
            >
              <Input placeholder="e.g., 1234567890123" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="dob" label="Date of Birth">
              <DatePicker style={{ width: "100%" }} placeholder="Select date" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="address" label="Home Address">
              <Input placeholder="123 Main Street, City" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="phoneNumber" label="Phone Number">
              <Input placeholder="e.g., 071 234 5678" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="occupation" label="Occupation">
              <Input placeholder="e.g., Student, Teacher" />
            </Form.Item>
          </Col>
        </Row>

        {/* Incident Details */}
        <Divider orientation="left">Incident Details</Divider>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item name="incidentDateTime" label="Date and Time of Incident">
              <DatePicker showTime style={{ width: "100%" }} placeholder="Select date and time" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="location" label="Location of Incident">
              <Input placeholder="e.g., Home, Street, Public Area" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name="aloneOrWithSomeone" label="Were you alone or with someone?">
          <Radio.Group>
            <Radio value="Alone">Alone</Radio>
            <Radio value="With Someone">With Someone</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="leadingEvents" label="Events Leading Up to the Incident">
          <TextArea placeholder="Briefly describe what happened before the incident..." autoSize={{ minRows: 3 }} />
        </Form.Item>

        {/* Suspect Details */}
        <Divider orientation="left">Suspect Information</Divider>
        <Form.Item name="isSuspectKnown" valuePropName="checked">
          <Checkbox onChange={onSuspectKnownChange}>
            I know the identity of the suspect
          </Checkbox>
        </Form.Item>

        {isSuspectKnown && (
          <>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item name="suspectName" label="Suspect's Name">
                  <Input placeholder="e.g., John Doe" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="suspectDescription" label="Suspect's Description">
                  <TextArea placeholder="e.g., Male, approx. 6ft, wearing dark clothes" autoSize={{ minRows: 2 }} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="weaponOrThreats" label="Were any weapons or threats used?">
              <Input placeholder="e.g., Knife, verbal threats" />
            </Form.Item>
          </>
        )}

        {/* Assault Details */}
        <Divider orientation="left">Assault Description</Divider>
        <Form.Item
          name="assaultDescription"
          label="Describe the Assault"
          rules={[{ required: true, message: "Please describe the assault" }]}
        >
          <TextArea placeholder="Include as many details as you feel comfortable sharing." autoSize={{ minRows: 4 }} />
        </Form.Item>

        <Form.Item name="injuries" valuePropName="checked">
          <Checkbox>I sustained physical injuries during the incident</Checkbox>
        </Form.Item>

        <Form.Item name="wordsSpokenBySuspect" label="Words Spoken by the Suspect">
          <Input placeholder="e.g., 'Don’t tell anyone'" />
        </Form.Item>

        {/* Post-Incident Actions */}
        <Divider orientation="left">After the Incident</Divider>
        <Form.Item name="actionsTaken" label="What actions did you take after the incident?">
          <TextArea placeholder="e.g., Reported to police, told a friend..." autoSize={{ minRows: 3 }} />
        </Form.Item>

        <Form.Item name="changedClothes" valuePropName="checked">
          <Checkbox>I changed clothes or showered after the incident</Checkbox>
        </Form.Item>

        <Form.Item name="clothesKept" valuePropName="checked">
          <Checkbox>I kept the clothes I was wearing as potential evidence</Checkbox>
        </Form.Item>

        {/* Submit */}
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Submit Report
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SexualAssaultReportForm;
