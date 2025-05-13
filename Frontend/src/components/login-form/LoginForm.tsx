"use client";
import { useState } from "react";
import { Form, Input, Button, message, Checkbox} from "antd";
import { MailOutlined, LockOutlined} from "@ant-design/icons";
import { ISignInRequest } from "@/providers/auth-provider/models";
import { useAuthActions } from "@/providers/auth-provider";
import { useUserActions } from "@/providers/users-providers";
import styles from "./LoginForm.module.css";

interface LoginFormProps {
  onLoginSuccess?: () => void;
  onBeforeSubmit?: () => void;
}

export default function LoginForm({
  onLoginSuccess,
  onBeforeSubmit,
}: LoginFormProps) {
  const { signIn } = useAuthActions();
  const { getCurrentUser } = useUserActions();
  const [loading, setLoading] = useState(false);

  // Configure toast message options
  const [messageApi, contextHolder] = message.useMessage();

  // Toast message display functions
  const showSuccessToast = (msg = "Successfully logged in!") => {
    messageApi.success({
      content: msg,
      duration: 3,
      style: {
        marginTop: "20px",
      },
    });
  };

  const showErrorToast = (
    msg = "Login failed! Please check your credentials."
  ) => {
    messageApi.error({
      content: msg,
      duration: 5,
      style: {
        marginTop: "20px",
      },
    });
  };

  const onFinishLogin = async (values: ISignInRequest) => {
    onBeforeSubmit?.();
    setLoading(true);
    try {
      const loginResult = await signIn(values);

      if (loginResult) {
        getCurrentUser();
        setLoading(false);
        showSuccessToast();
        onLoginSuccess?.();
      } else {
        setLoading(false);
        showErrorToast();
      }
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error);
      if (error.response && error.response.data) {
        showErrorToast(
          error.response.data.errorMessage ||
            "Login failed! Please check your credentials."
        );
      } else {
        showErrorToast();
      }
    }
  };

  return (
    <>
      {contextHolder}
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinishLogin}
        size="large"
        layout="vertical"
        className={styles.form}
      >
        <Form.Item
          name="userNameOrEmailAddress"
          validateTrigger={["onBlur", "onSubmit"]}
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input
            prefix={<MailOutlined className={styles.inputIcon} />}
            placeholder="Email"
            disabled={loading}
            className={styles.input}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className={styles.inputIcon} />}
            placeholder="Password"
            className={styles.input}
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          className={styles.rememberMe}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submitButton}
            loading={loading}
            block
          >
            Log In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
