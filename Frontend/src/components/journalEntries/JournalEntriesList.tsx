"use client";
import React, { useEffect, useState } from "react";
import { List, Typography, Tag, Spin, message, Card } from "antd";
import dayjs from "dayjs";
import {
  useSurvivorState,
} from "@/providers/survivors-provider";
import {
  useJournalEntryActions,
  useJournalEntryState,
} from "@/providers/journal-provider";
const JournalEntriesList: React.FC = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Survivor } = useSurvivorState();
  const { getJournalEntriesByPersonId } = useJournalEntryActions();
  const { journalEntries } = useJournalEntryState(); 
  const fetchEntries = async () => {
    if (journalEntries == null || length == 0) {
    }
    try {
      getJournalEntriesByPersonId(Survivor?.id);
      setEntries(journalEntries || []);
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
