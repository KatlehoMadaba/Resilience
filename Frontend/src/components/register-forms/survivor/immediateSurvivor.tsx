"use client";
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Divider,
  message,
  Typography,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import Link from "next/link";
import styles from "./immediate-register-form.module.css";

const { Text, Paragraph } = Typography;

const ImmediateRegisterForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const onFinish = async (values) => {
    if (!agreed) {
      message.warning(
        "Please agree to the terms and privacy policy to continue."
      );
      return;
    }

    setLoading(true);
    try {
      // Replace with your actual registration logic
      console.log("Registration values:", values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      message.success("Account created successfully!");
      // Redirect or further action
    } catch (error) {
      message.error("Registration failed. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formIntro}>
        <Paragraph className={styles.introText}>
          Creating an account helps us provide personalized support during this
          critical time. Your information is completely private and secure.
        </Paragraph>
      </div>

      <Form
        form={form}
        name="immediate_survivor_register"
        layout="vertical"
        onFinish={onFinish}
        scrollToFirstError
        className={styles.form}
        requiredMark={false}
      >
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input
            prefix={<UserOutlined className={styles.inputIcon} />}
            placeholder="Enter your name"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input
            prefix={<MailOutlined className={styles.inputIcon} />}
            placeholder="Enter your email"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number (Optional)"
          rules={[
            {
              pattern: /^[0-9+-]+$/,
              message: "Please enter a valid phone number",
            },
          ]}
        >
          <Input
            prefix={<PhoneOutlined className={styles.inputIcon} />}
            placeholder="Enter your phone number"
            size="large"
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Please enter your password" },
            { min: 8, message: "Password must be at least 8 characters" },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className={styles.inputIcon} />}
            placeholder="Create a password"
            size="large"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            className={styles.passwordInput}
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("The passwords do not match"));
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className={styles.inputIcon} />}
            placeholder="Confirm your password"
            size="large"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            className={styles.passwordInput}
          />
        </Form.Item>

        <div className={styles.securityNote}>
          <Text className={styles.securityText}>
            <span className={styles.securityIcon}>🔒</span>
            Your information is encrypted and will never be shared without your
            consent
          </Text>
        </div>

        <Form.Item className={styles.agreementItem}>
          <Checkbox
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className={styles.checkbox}
          >
            I agree to the{" "}
            <Link href="/terms" className={styles.link}>
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className={styles.link}>
              Privacy Policy
            </Link>
          </Checkbox>
        </Form.Item>

        <Form.Item className={styles.submitItem}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
            className={styles.submitButton}
            disabled={!agreed}
            block
          >
            Create My Account
          </Button>
        </Form.Item>

        <Divider className={styles.divider}>
          <Text className={styles.dividerText}>Already have an account?</Text>
        </Divider>

        <div className={styles.loginPrompt}>
          <Link href="/login" className={styles.loginLink}>
            <Button type="link" className={styles.loginButton}>
              Log in here
            </Button>
          </Link>
          <div className={styles.emergencySection}>
            <Text className={styles.emergencyText}>In crisis?</Text>
            <Link href="/emergency" className={styles.emergencyLink}>
              Get immediate help
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ImmediateRegisterForm;
