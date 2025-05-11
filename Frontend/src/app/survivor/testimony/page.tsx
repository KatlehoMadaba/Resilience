"use client";
import React, { useState, useEffect } from "react";
import {
  Tabs,
  Button,
  Form,
  Input,
  Switch,
  Card,
  Typography,
  Tag,
  Divider,
  Space,
  Alert,
  Modal,
  Spin,
  Empty,
  Select,
} from "antd";
import {
  HeartOutlined,
  EditOutlined,
  EyeOutlined,
  LockOutlined,
  UserOutlined,
  TagOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import {
  useTestimonyActions,
  useTestimonyState,
} from "@/providers/testimony-provider";
import { useSurvivorState } from "@/providers/survivors-provider";
import { ITestimony } from "@/providers/testimony-provider/models";
import styles from "./testimonies-page.module.css";

const { TabPane } = Tabs;
const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const TestimoniesPage = () => {
  const [activeTab, setActiveTab] = useState("view");
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [filter, setFilter] = useState("");

  const { testimonies } = useTestimonyState();
  const { createTestimony, getAllTestimonies } = useTestimonyActions();
  const { currentSurvivor } = useSurvivorState();
  const { isSuccess, isPending } = useTestimonyState();

  // Common tags people might use
  const suggestedTags = [
    "healing",
    "progress",
    "hope",
    "recovery",
    "strength",
    "survivor",
    "growth",
    "courage",
    "support",
    "journey",
  ];

  useEffect(() => {
    getAllTestimonies();
  }, []);

  const handleSubmit = (values: ITestimony) => {
    try {
      const testimony: ITestimony = {
        ...values,
        // creationTime: new Date(), 
        personId: currentSurvivor?.id,
        title: values.title,
        content: values.content,
        tags: values.tags || [],
        isAnonymous: values.isAnonymous,
      };

      createTestimony(testimony);

      if (isSuccess) {
        form.resetFields();
        setIsModalVisible(true);
      }
    } catch (error) {
      console.error("Error submitting testimony:", error);
    }
  };

  const handleAddTag = (tag: string) => {
    const currentTags = form.getFieldValue("tags") || [];
    if (!currentTags.includes(tag)) {
      form.setFieldsValue({ tags: [...currentTags, tag] });
    }
  };

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const filteredTestimonies = testimonies?.filter((testimony) => {
    if (!filter) return true;
    return testimony.tags?.includes(filter);
  });

  const renderCreateTab = () => (
    <div className={styles.createContainer}>
      <div className={styles.createIntro}>
        <Title level={3} className={styles.createTitle}>
          Share Your Journey
        </Title>
        <Paragraph className={styles.createDescription}>
          Your story matters and has the power to inspire others. Sharing can be
          a healing step in your own journey and a beacon of hope for others
          walking similar paths.
        </Paragraph>
        <Alert
          message="Safe Space Promise"
          description="This is a supportive community. You can choose to remain anonymous, and we prioritize your privacy and emotional safety."
          type="info"
          showIcon
          icon={<LockOutlined />}
          className={styles.safeSpaceAlert}
        />
      </div>

      <Divider className={styles.divider} />

      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className={styles.testimonyForm}
        initialValues={{ isAnonymous: true }}
      >
        <Form.Item
          name="title"
          label="Title of your testimony"
          rules={[
            { required: true, message: "Please give your testimony a title" },
          ]}
        >
          <Input
            placeholder="E.g., 'My Journey to Healing' or 'Finding Strength'"
            className={styles.inputField}
          />
        </Form.Item>

        <Form.Item
          name="content"
          label="Your testimony"
          rules={[{ required: true, message: "Please share your story" }]}
        >
          <TextArea
            placeholder="Share as much or as little as feels right for you. Your experience matters."
            rows={8}
            className={styles.textareaField}
          />
        </Form.Item>

        <Form.Item
          name="tags"
          label={
            <div className={styles.tagsLabel}>
              <span>Tags</span>
              <Text type="secondary" className={styles.tagsHint}>
                (Select topics that relate to your testimony)
              </Text>
            </div>
          }
        >
          <Select
            mode="tags"
            style={{ width: "100%" }}
            placeholder="Add tags (e.g., healing, hope)"
            className={styles.tagsField}
          >
            {suggestedTags.map((tag) => (
              <Option key={tag} value={tag}>
                {tag}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <div className={styles.suggestedTags}>
          <Text type="secondary">Suggested: </Text>
          <Space wrap>
            {suggestedTags.map((tag) => (
              <Tag
                key={tag}
                className={styles.suggestedTag}
                onClick={() => handleAddTag(tag)}
              >
                {tag}
              </Tag>
            ))}
          </Space>
        </div>

        <Form.Item
          name="isAnonymous"
          valuePropName="checked"
          className={styles.anonymousToggle}
        >
          <div className={styles.anonymousContainer}>
            <Switch defaultChecked />
            <Text className={styles.anonymousText}>
              <LockOutlined className={styles.anonymousIcon} />
              Share anonymously
            </Text>
          </div>
        </Form.Item>

        <Form.Item className={styles.submitContainer}>
          <Button
            type="primary"
            htmlType="submit"
            loading={isPending}
            className={styles.submitButton}
            icon={<HeartOutlined />}
            size="large"
          >
            Share Your Testimony
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title="Thank You For Sharing"
        open={isModalVisible}
        onOk={() => {
          setIsModalVisible(false);
          setActiveTab("view");
        }}
        onCancel={() => setIsModalVisible(false)}
        okText="View Testimonies"
        cancelText="Close"
      >
        <div className={styles.successModal}>
          <Paragraph>
            Thank you for courageously sharing your testimony. Your words can be
            a powerful source of hope and healing for others.
          </Paragraph>
          <Paragraph>Would you like to view other testimonies?</Paragraph>
        </div>
      </Modal>
    </div>
  );

  const renderViewTab = () => (
    <div className={styles.viewContainer}>
      <div className={styles.viewHeader}>
        <Title level={3} className={styles.viewTitle}>
          Community Testimonies
        </Title>
        <Paragraph className={styles.viewDescription}>
          Read stories from others who have walked similar paths. Remember,
          healing looks different for everyone, and every journey is valid.
        </Paragraph>

        <div className={styles.filterContainer}>
          <Select
            placeholder="Filter by tag"
            onChange={handleFilterChange}
            allowClear
            className={styles.filterSelect}
            suffixIcon={<FilterOutlined />}
          >
            <Option value="">All testimonies</Option>
            {suggestedTags.map((tag) => (
              <Option key={tag} value={tag}>
                {tag}
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <div className={styles.testimoniesGrid}>
        {isPending && (
          <div className={styles.loadingContainer}>
            <Spin size="large" />
            <Text className={styles.loadingText}>Loading testimonies...</Text>
          </div>
        )}

        {!isPending && filteredTestimonies && filteredTestimonies.length > 0 ? (
          filteredTestimonies.map((testimony, index) => (
            <Card key={index} className={styles.testimonyCard} hoverable>
              <div className={styles.testimonyHeader}>
                <Title level={4} className={styles.testimonyTitle}>
                  {testimony.title || "Untitled"}
                </Title>
                <div className={styles.testimonyAuthor}>
                  {testimony.isAnonymous ? (
                    <span className={styles.anonymousAuthor}>
                      <LockOutlined /> Anonymous
                    </span>
                  ) : (
                    <span className={styles.namedAuthor}>
                      <UserOutlined />{" "}
                      {currentSurvivor?.userName || "Community Member"}
                    </span>
                  )}
                </div>
              </div>

              <Divider className={styles.testimonyDivider} />

              <Paragraph className={styles.testimonyContent}>
                {testimony.content || "No content available"}
              </Paragraph>

              {testimony.tags && testimony.tags.length > 0 && (
                <div className={styles.testimonyTags}>
                  <TagOutlined className={styles.tagIcon} />
                  <Space size={[0, 8]} wrap>
                    {testimony.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex} className={styles.testimonyTag}>
                        {tag}
                      </Tag>
                    ))}
                  </Space>
                </div>
              )}

              <div className={styles.testimonyFooter}>
                <Button
                  type="text"
                  icon={<HeartOutlined />}
                  className={styles.supportButton}
                >
                  Support
                </Button>
              </div>
            </Card>
          ))
        ) : (
          <Empty
            description={
              <span className={styles.emptyText}>
                {filter
                  ? `No testimonies found with the tag "${filter}"`
                  : "No testimonies available yet. Be the first to share your story."}
              </span>
            }
            className={styles.emptyContainer}
          >
            <Button
              type="primary"
              onClick={() => setActiveTab("create")}
              icon={<EditOutlined />}
            >
              Share Your Story
            </Button>
          </Empty>
        )}
      </div>
    </div>
  );

  return (
    <div className={styles.pageContainer}>
      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        className={styles.tabs}
      >
        <TabPane
          tab={
            <span>
              <EyeOutlined /> View Testimonies
            </span>
          }
          key="view"
        >
          {renderViewTab()}
        </TabPane>
        <TabPane
          tab={
            <span>
              <EditOutlined /> Share Your Story
            </span>
          }
          key="create"
        >
          {renderCreateTab()}
        </TabPane>
      </Tabs>

      <div className={styles.supportSection}>
        <Alert
          message="Need Support?"
          description={
            <div>
              If reading these testimonies brings up difficult emotions, please
              remember that support is available.
              <Button type="link" className={styles.resourcesButton}>
                Access Resources
              </Button>
            </div>
          }
          type="warning"
          showIcon
          className={styles.supportAlert}
        />
      </div>
    </div>
  );
};

export default TestimoniesPage;
