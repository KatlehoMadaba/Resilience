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
  InputNumber,
} from "antd";
import { useRegisterStyles } from "./styles";
import { IPastSurvivorRegsister } from "@/providers/auth-provider/models";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  useAuthActions,
  useAuthState,
} from "../../../providers/auth-provider/index";

const { Paragraph } = Typography;
const { Option } = Select;

const PastSurvivorRegisterForm: React.FC = () => {
  const { styles } = useRegisterStyles();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { isSuccess, isError } = useAuthState();
  const router = useRouter();
  const [messageApi, contextHolder] = message.useMessage();
  const { signUpPastSurvivor } = useAuthActions();
  const [signupAttempted, setSignupAttempted] = useState(false);

  const showSuccessToast = () => messageApi.success("Signup successful!");
  const showErrorToast = () =>
    messageApi.error("Sorry we couldn't sign you up please try again");

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

  const onFinish = async (values: IPastSurvivorRegsister) => {
    const formValues = {
      ...values,
      anonymousId: "anonymous_" + Math.random().toString(36).substr(2, 9),
      isAnonymous: true,
      
    };

    try {
      setLoading(true);
      setSignupAttempted(true);
      await signUpPastSurvivor(formValues);
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
          initialValues={{
            sex: 1,
            recoveryPhase: 1,
            timeElapsedInDays: 0,
            hasDisclosedBefore: false,
            useDisplayNameOnly: false,
          }}
        >
          <Form.Item
            name="userName"
            label="Username"
            rules={[
              { required: true, message: "Please enter your username" },
              { min: 3, message: "Username must be at least 3 characters" },
            ]}
          >
            <Input size="large" placeholder="Enter your username" />
          </Form.Item>

          <Form.Item
            name="name"
            label="First Name"
            rules={[
              { required: true, message: "Please enter your first name" },
            ]}
          >
            <Input size="large" placeholder="Enter your first name" />
          </Form.Item>

          <Form.Item
            name="surname"
            label="Last Name"
            rules={[{ required: true, message: "Please enter your last name" }]}
          >
            <Input size="large" placeholder="Enter your last name" />
          </Form.Item>

          <Form.Item
            name="emailAddress"
            label="Email Address"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email address" },
            ]}
          >
            <Input size="large" placeholder="Enter your email address" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Please enter your password" },
              { min: 6, message: "Password must be at least 6 characters" },
            ]}
          >
            <Input.Password size="large" placeholder="Enter your password" />
          </Form.Item>

          <Form.Item
            name="displayName"
            label="Display Name"
            rules={[
              { required: true, message: "Please enter your display name" },
            ]}
          >
            <Input size="large" placeholder="How you'd like to be known" />
          </Form.Item>

          <Form.Item name="useDisplayNameOnly" valuePropName="checked">
            <Checkbox>Use Display Name Only (hide real name)</Checkbox>
          </Form.Item>

          <Form.Item
            name="sex"
            label="Gender"
            rules={[{ required: true, message: "Please select your gender" }]}
          >
            <Select size="large" placeholder="Select your gender">
              <Option value={1}>Female</Option>
              <Option value={2}>Male</Option>
              <Option value={3}>Other</Option>
              <Option value={4}>Prefer not to say</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter your phone number" },
              {
                pattern: /^\+?[\d\s\-\(\)]+$/,
                message: "Please enter a valid phone number",
              },
            ]}
          >
            <Input size="large" placeholder="Enter your phone number" />
          </Form.Item>

          <Form.Item
            name="incidentDate"
            label="Incident Date"
            rules={[
              { required: true, message: "Please select the incident date" },
            ]}
          >
            <DatePicker
              size="large"
              style={{ width: "100%" }}
              placeholder="Select incident date"
              disabledDate={(current) => current && current.isAfter(new Date())}
            />
          </Form.Item>

          <Form.Item name="hasDisclosedBefore" valuePropName="checked">
            <Checkbox>I have disclosed this incident before</Checkbox>
          </Form.Item>

          <Form.Item
            name="timeElapsedInDays"
            label="Days Since Incident"
            rules={[
              { required: true, message: "Please enter days since incident" },
            ]}
          >
            <InputNumber
              size="large"
              style={{ width: "100%" }}
              min={0}
              placeholder="Number of days since the incident"
            />
          </Form.Item>

          <Form.Item
            name="recoveryPhase"
            label="Recovery Phase"
            rules={[
              { required: true, message: "Please select your recovery phase" },
            ]}
          >
            <Select
              size="large"
              placeholder="Select your current recovery phase"
            >
              <Option value={1}>Initial Response (0-72 hours)</Option>
              <Option value={2}>Short-term (3 days - 3 months)</Option>
              <Option value={3}>Long-term (3+ months)</Option>
              <Option value={4}>Ongoing Recovery</Option>
            </Select>
          </Form.Item>

          {/* Legacy fields - keeping for backward compatibility */}
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
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default PastSurvivorRegisterForm;
