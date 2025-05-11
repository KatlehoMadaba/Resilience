"use client";

import { Typography, Card, List, Tag } from "antd";
import {
  useJournalEntryActions,
  useJournalEntryState,
} from "@/providers/journal-provider";
import { useEffect } from "react";
import JournalEntryForm from "@/components/journalEntries/JournalEntryForm";
import styles from "./JournalPage.module.css";

const { Title, Paragraph, Text } = Typography;

export default function JournalPage() {
  const { journalEntries } = useJournalEntryState();
  const { getJournalEntries } = useJournalEntryActions();

  useEffect(() => {
    getJournalEntries?.();
  }, []);

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Title level={2}>Journal Your Feelings</Title>
        <Paragraph>
          This is your private space to express yourself. Write freely—every
          thought matters.
        </Paragraph>

        <JournalEntryForm />
      </Card>

      <div className={styles.entryList}>
        <Title level={3}>Your Past Entries</Title>
        <List
          dataSource={journalEntries}
          renderItem={(entry) => (
            <List.Item key={entry.entryDate}>
              <Card className={styles.entryCard}>
                <Text type="secondary">
                  {new Date(entry.entryDate).toLocaleString()}
                </Text>
                <Paragraph style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>
                  {entry.content}
                </Paragraph>
                <div style={{ marginTop: 8 }}>
                  {entry.tags?.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
