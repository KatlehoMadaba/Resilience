"use client"
import React, { useEffect, useState } from "react";
import { List, Typography, Tag, Spin, message, Card } from "antd";
import axios from "axios";
import dayjs from "dayjs";

const JournalEntriesList: React.FC = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEntries = async () => {
    try {
      const response = await axios.get("/api/journal-entries");
      setEntries(response.data.items || []);
    } catch {
      message.error("Failed to fetch journal entries.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <Spin spinning={loading}>
      <List
        header={
          <Typography.Title level={4}>
            Previous Journal Entries
          </Typography.Title>
        }
        itemLayout="vertical"
        dataSource={entries}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card>
              <Typography.Paragraph>{item.content}</Typography.Paragraph>
              <Typography.Text type="secondary">
                {dayjs(item.entryDate).format("MMMM D, YYYY h:mm A")}
              </Typography.Text>
              <div style={{ marginTop: 8 }}>
                {item.tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              {item.isPrivate && <Tag color="red">Private</Tag>}
            </Card>
          </List.Item>
        )}
      />
    </Spin>
  );
};

export default JournalEntriesList;
