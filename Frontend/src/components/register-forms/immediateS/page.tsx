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
import { IAuth } from "../../../providers/auth-provider/models";
import { useAuthActions } from "@/providers/auth-provider";
import { useAuthState } from "@/providers/auth-provider";

import { ReflistSex } from "../../../enums/ReflistSex";
const { Option } = Select;
import { useRouter } from "next/navigation";

export default function ImmdeiateRegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [generatedAnonId, setGeneratedAnonId] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const { signUp } = useAuthActions();
  const { isSuccess, isError, isPending } = useAuthState();
  const generateAnonymousId = () => {
    const random = Math.floor(1000 + Math.random() * 9000);
    return `Anonymous${random}`;
  };

  useEffect(() => {
    if (isAnonymous) {
      const anonId = generateAnonymousId();
      setGeneratedAnonId(anonId);
    } else {
      setGeneratedAnonId("");
    }
  }, [isAnonymous]);

  const showSuccessToast = () => {
    messageApi.success({
      content: "Signup successful!",
      duration: 3,
    });
  };

  const showErrorToast = () => {
    messageApi.error({
      content: "Signup failed. Please try again.",
      duration: 5,
    });
  };

  const onFinish = async (values: IAuth) => {
    if (isPending) {
      setLoading(true);
    }

    console.log("this is the value:", values);
    try {
      const formValues: IAuth = {
        ...values,
        anonymousId: isAnonymous ? generatedAnonId : "",
        incidentDate: values.incidentDate,
        role: "immediatesurvivor",
        isAnonymous: false,
      };
      debugger
      await signUp(formValues);
      console.log("Payload for submission:", formValues);
      if (isPending) {
        setLoading(true);
      }
      if (isSuccess) {
        setLoading(false);
        showSuccessToast();
        router.push("/login");
      }
    } catch (error) {
      if (isError) {
        showErrorToast();
        console.log(error);
      }
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
                <Option value={ReflistSex.Male}>Male</Option>
                <Option value={ReflistSex.Female}>Female</Option>
                <Option value={ReflistSex.PreferNotToSay}>
                  Prefer Not Say
                </Option>
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

        <Form.Item name="IncidentDate" label="Incident Date">
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
}
