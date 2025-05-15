"use client";

import { useState, useEffect } from "react";
import {
  Typography,
  Form,
  Input,
  Button,
  Card,
  Avatar,
  Row,
  Col,
  Spin,
  Divider,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  useProfessionalActions,
  useProfessionalState,
} from "@/providers/professionals-provider";
import { useUserActions } from "@/providers/users-providers";
import { IProfessional} from "@/providers/professionals-provider/models";

const { Title } = Typography;

const ProfilePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [formValues, setFormValues] = useState<IProfessional | null>(null);

  const { isPending, isError, isSuccess, currentProfessional } = useProfessionalState();
  const { getCurrentUser } = useUserActions();
  const { getCurrentProfessional, updateProfessional } = useProfessionalActions();

  useEffect(() => {
    fetchProfessionalOnReload();
  }, []);

  useEffect(() => {
    setLoading(isPending);
    if (isError || isSuccess) setLoading(false);
  }, [isPending, isError, isSuccess]);

  useEffect(() => {
    if (currentProfessional) {
      const data: IProfessional = {
        id: currentProfessional?.id,
        name: currentProfessional?.name,
        surname: currentProfessional?.surname,
        emailAddress: currentProfessional?.emailAddress,
        phoneNumber: currentProfessional?.phoneNumber,
        userName: currentProfessional?.userName,
        password: "",
        organization: currentProfessional?.organization,
        profession: currentProfessional?.profession,
        biography: currentProfessional?.phoneNumber,
        qualification: currentProfessional?.sex,
      };
      setFormValues(data);
      form.setFieldsValue(data);
    }
  }, [currentProfessional]);

  const fetchProfessionalOnReload = async (): Promise<void> => {
    const token = sessionStorage.getItem("jwt");
    if (!token) return;

    try {
      setLoading(true);
      const user = await getCurrentUser();
      await getCurrentProfessional(user.id);
    } catch (err) {
      console.error("Error fetching Professional data:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateProfessionalProfile = async () => {
    try {
      const values = await form.validateFields();
      if (!formValues?.id) return;
      await updateProfessional(formValues.id, {
        ...formValues,
        ...values,
      });

      // Update form values immediately with new data after successful update
      setFormValues((prev) => ({
        ...prev,
        ...values,
      }));

      // Optionally update the UI right away
      form.setFieldsValue({ ...values });
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  return (
    <div>
      <Title level={2}>Profile</Title>
      <Card>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          {/* Avatar showing first initial */}
          <Avatar
            size={100}
            style={{ backgroundColor: "#1890ff", fontSize: 36 }}
          >
            {formValues?.name?.charAt(0).toUpperCase() || <UserOutlined />}
          </Avatar>

          <div style={{ marginTop: 12, fontSize: 18, fontWeight: 500 }}>
            {formValues?.name} {formValues?.surname}
          </div>
        </div>

        {loading || !formValues ? (
          <div className="spin-container">
            <Spin spinning tip="Loading provider data..." />
          </div>
        ) : (
          <Form
            form={form}
            layout="vertical"
            onValuesChange={(changedValues) =>
              setFormValues({ ...formValues, ...changedValues })
            }
          >
            <Row gutter={24}>
              {/* Left column */}
              <Col xs={24} md={12}>
                <Form.Item label="Full Name" name="name">
                  <Input />
                </Form.Item>

                <Form.Item label="Surname" name="surname">
                  <Input />
                </Form.Item>

                <Form.Item label="Email Address" name="emailAddress">
                  <Input />
                </Form.Item>

                <Form.Item label="Phone Number" name="phoneNumber">
                  <Input />
                </Form.Item>

                <Form.Item label="Username" name="userName">
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: "Password is required!" }]}
                >
                  <Input.Password placeholder="Enter new password (required)" />
                </Form.Item>
              </Col>

              {/* Right column */}
              <Col xs={24} md={12}>
                <Form.Item label="Title" name="organization">
                  <Input />
                </Form.Item>

                <Form.Item label="profession" name="profession">
                  <Input />
                </Form.Item>

                <Form.Item label="biography" name="biography">
                  <Input />
                </Form.Item>

                <Form.Item label="qualification" name="qualification">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Divider />
            <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" onClick={updateProfessionalProfile}>
                Save Changes
              </Button>
            </Form.Item>
          </Form>
        )}
      </Card>
    </div>
  );
};

export default ProfilePage;
