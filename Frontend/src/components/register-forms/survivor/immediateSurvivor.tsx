"use client";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Checkbox,
  Select,
  Typography,
  message,
} from "antd";
import { useRegisterStyles } from "./styles";
import { ISurvivorRegister } from "@/providers/survivors-provider/models";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  useAuthActions,
  useAuthState,
} from "../../../providers/auth-provider/index";
const { Paragraph } = Typography;
const { Option } = Select;

const ImmediateRegisterForm: React.FC = () => {
  const { styles } = useRegisterStyles();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { isSuccess, isError } = useAuthState();
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const { signUpImmediateSurvivor } = useAuthActions();
  const [signupAttempted, setSignupAttempted] = useState(false);
  const showSuccessToast = () => messageApi.success("Signup successful!");
  const showErrorToast = () =>
    messageApi.error("sorry we couldnt sign you up please try again");

  useEffect(() => {
    if (signupAttempted) {
      if (isSuccess) {
        showSuccessToast();
        router.push("/login");
        setSignupAttempted(false);
        setLoading(false);
      } else if (isError) {
        showErrorToast();
        setSignupAttempted(false);
        setLoading(false);
      }
    }
  }, [isSuccess, isError, signupAttempted]);

  const onFinish = async (values: ISurvivorRegister) => {
    const formValues = { ...values };
    try {
      setLoading(true);
      setSignupAttempted(true);
      await signUpImmediateSurvivor(formValues);
    } catch (error) {
      console.error("Signup error:", error);
      showErrorToast();
      setLoading(false);
      setSignupAttempted(false);
    }
  };

  return (
    <>
      {contextHolder}
      <div className={styles.formContainer}>
        <div className={styles.formIntro}>
          <Paragraph className={styles.introText}>
            Please fill in your details. All information is handled with
            confidentiality and care.
          </Paragraph>
        </div>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className={styles.form}
        >
          <Form.Item
            name="userName"
            label="Username"
            rules={[{ required: true }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="name"
            label="First Name"
            rules={[{ required: true }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="surname"
            label="Last Name"
            rules={[{ required: true }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="emailAddress"
            label="Email Address"
            rules={[{ required: true, type: "email" }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password size="large" />
          </Form.Item>

          <Form.Item
            name="displayName"
            label="Display Name"
            rules={[{ required: true }]}
          >
            <Input size="large" />
          </Form.Item>

          <Form.Item name="useDisplayNameOnly" valuePropName="checked">
            <Checkbox>Use Display Name Only</Checkbox>
          </Form.Item>

          <Form.Item name="sex" label="Sex" rules={[{ required: true }]}>
            <Select size="large">
              <Option value={1}>Female</Option>
              <Option value={2}>Male</Option>
              <Option value={3}>Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[{ required: true }]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            name="incidentDate"
            label="Incident Date"
            rules={[{ required: true }]}
          >
            <DatePicker size="large" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item name="hasReceivedMedicalAttention" valuePropName="checked">
            <Checkbox>Received Medical Attention</Checkbox>
          </Form.Item>

          <Form.Item name="hasReportedToAuthorities" valuePropName="checked">
            <Checkbox>Reported to Authorities</Checkbox>
          </Form.Item>

          <Form.Item className={styles.submitItem}>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.submitButton}
              loading={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
export default ImmediateRegisterForm;
