"use client";
import { useEffect, useState } from "react";
import { Form, Input, Button, DatePicker, Switch, Select, message } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import styles from "./register-page.module.css";
import { useAuthActions } from "@/providers/auth-provider";
import { useRouter } from "next/navigation";
// import { ISurvivorRegister } from "@/providers/survivors-provider/models";
import { IAuth } from "@/providers/auth-provider/models";

const { Option } = Select;

const RegisterForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [generatedAnonId, setGeneratedAnonId] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const { signUpImmediateSurvivor } = useAuthActions();

  const generateAnonymousId = () =>
    `Anonymous${Math.floor(1000 + Math.random() * 9000)}`;

  useEffect(() => {
    setGeneratedAnonId(isAnonymous ? generateAnonymousId() : "");
  }, [isAnonymous]);

  const showSuccessToast = () => messageApi.success("Signup successful!");
  const showErrorToast = () =>
    messageApi.error("Signup failed. Please try again.");

  const onFinish = async (values: IAuth) => {
    setLoading(true);
    try {
      const formValues = {
        ...values,
        anonymousId: isAnonymous ? generateAnonymousId() : "",
        //role: "immediatesurvivor",
        isAnonymous,
      };

      signUpImmediateSurvivor(formValues);
      showSuccessToast();
      router.push("/login");
    } catch {
      showErrorToast();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        layout="vertical"
        onFinish={onFinish}
        className={styles.form}
        size="large"
      >
        <Form.Item
          name="isAnonymous"
          label="Register as Anonymous?"
          valuePropName="checked"
        >
          <Switch onChange={setIsAnonymous} />
        </Form.Item>

        {!isAnonymous && (
          <>
            <Form.Item
              name="userName"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
              <Input placeholder="First name" />
            </Form.Item>
            <Form.Item
              name="surname"
              label="Surname"
              rules={[{ required: true }]}
            >
              <Input placeholder="Last name" />
            </Form.Item>
            <Form.Item
              name="emailAddress"
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item name="phoneNumber" label="Phone Number">
              <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
            </Form.Item>
            <Form.Item name="displayName" label="Display Name">
              <Input placeholder="Display Name" />
            </Form.Item>
            <Form.Item
              name="useDisplayNameOnly"
              label="Use Display Name Only"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
            <Form.Item name="sex" label="Sex" rules={[{ required: true }]}>
              <Select placeholder="Select your gender">
                <Option value={1}>Male</Option>
                <Option value={2}>Female</Option>
                <Option value={3}>Prefer Not Say</Option>
              </Select>
            </Form.Item>
          </>
        )}

        {isAnonymous && (
          <Form.Item label="Anonymous ID">
            <Input value={generatedAnonId} disabled />
          </Form.Item>
        )}

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item name="incidentDate" label="Incident Date">
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="hasReceivedMedicalAttention"
          label="Received Medical Attention?"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item
          name="hasReportedToAuthorities"
          label="Reported to Authorities?"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            block
            className={styles.submitButton}
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RegisterForm;
