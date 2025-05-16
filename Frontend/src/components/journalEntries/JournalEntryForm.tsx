"use client";

import { useState } from "react";
import { Form, Input, Switch, Button, message } from "antd";
import { useSurvivorState } from "@/providers/survivors-provider";
import { useJournalEntryActions } from "@/providers/journal-provider";
import { IJournalEntry } from "@/providers/journal-provider/models";

const { TextArea } = Input;

const JournalEntryForm = () => {
  const [form] = Form.useForm();
  const { currentSurvivor } = useSurvivorState();
  const { createJournalEntry } = useJournalEntryActions();
  const [privateEntry, setPrivateEntry] = useState(true);
  const [loading, setLoading] = useState(false);
  const { getJournalEntriesByPersonId } = useJournalEntryActions();
  const handleSubmit = async (values: { title: string; entry: string }) => {
    if (!currentSurvivor?.id) {
      message.error("Missing survivor ID");
      return;
    }

    const newEntry: IJournalEntry = {
      personId: currentSurvivor.id,
      content: `${values.title}\n\n${values.entry}`,
      entryDate: new Date().toISOString(),
      tags: [values.title],
      isPrivate: privateEntry,
    };

    try {
      setLoading(true);
      await createJournalEntry(newEntry);
      message.success("Journal entry saved 💜");
      form.resetFields();
      getJournalEntriesByPersonId(currentSurvivor.id);
    } catch {
      message.error("Failed to save entry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit}>
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please enter a title" }]}
      >
        <Input placeholder="E.g., Today I felt..." />
      </Form.Item>

      <Form.Item
        name="entry"
        label="Your Entry"
        rules={[{ required: true, message: "Please write your journal" }]}
      >
        <TextArea rows={6} placeholder="Write your thoughts here..." />
      </Form.Item>

      <Form.Item label="Keep this entry private">
        <Switch checked={privateEntry} onChange={setPrivateEntry} />
        <span style={{ marginLeft: 8 }}>
          {privateEntry ? "Yes, keep it private" : "No, share it anonymously"}
        </span>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          Save Entry
        </Button>
      </Form.Item>
    </Form>
  );
};

export default JournalEntryForm;
