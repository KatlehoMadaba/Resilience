"use client";

import { Typography, Card, List, Tag, Spin } from "antd";
import {
  useJournalEntryActions,
  useJournalEntryState,
} from "@/providers/journal-provider";
import { useEffect,useState } from "react";
import JournalEntryForm from "@/components/journalEntries/JournalEntryForm";
import styles from "./JournalPage.module.css";
import { useUserActions} from "@/providers/users-providers";
import {
  useSurvivorActions,
  useSurvivorState,
} from "@/providers/survivors-provider";
import router from "next/router";

const { Title, Paragraph, Text } = Typography;

export default function JournalPage() {
  const { journalEntries, isPending, isSuccess } = useJournalEntryState();
  const { getJournalEntriesByPersonId } = useJournalEntryActions();
  const { currentSurvivor } = useSurvivorState();
  const { getCurrentSurvivor } = useSurvivorActions();
  const { getCurrentUser } = useUserActions();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchSurvivorOnReload();
  }, []);

  const fetchSurvivorOnReload = async () => {
    const token = sessionStorage.getItem("jwt");
    if (!token) {
      router.push("/login");
      return;
    }
    try {
      const user = await getCurrentUser();
      await getCurrentSurvivor(user?.id);
    } catch (err) {
      console.error("Error loading the Survivor:", err);
    } finally {
      console.error();
    }
  };

  useEffect(() => {
    if (currentSurvivor != null) {
      try {
        if (isPending) setLoading(true);
        getJournalEntriesByPersonId(currentSurvivor?.id);
        if (isSuccess) setLoading(false);
      } catch {
        console.error();
      } finally {
        setLoading(false);
      }
    }
  }, [currentSurvivor, isPending, isSuccess]);

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
        <Spin spinning={loading}>
          <List
            dataSource={journalEntries}
            renderItem={(entry) => (
              <List.Item key={entry?.entryDate}>
                <Card className={styles.entryCard}>
                  <Text type="secondary">
                    {new Date(entry?.entryDate).toLocaleString()}
                  </Text>
                  <Paragraph style={{ marginTop: 8, whiteSpace: "pre-wrap" }}>
                    {entry?.content}
                  </Paragraph>
                  <div style={{ marginTop: 8 }}>
                    {entry?.tags?.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </Spin>
      </div>
    </div>
  );
}
