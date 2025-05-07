"use client";
import { Modal, List, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

const emergencyContacts = [
  { title: '24/7 Toll Free Helpline', value: '00000-5277' },
  { title: 'Voice Prompt', value: '1*34773554' },
  { title: 'Ambulance', value: '101777' },
  { title: 'Police', value: '10111' },
];

export default function SupportModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  return (
    <Modal
      title="Support Contacts"
      open={open}
      onCancel={onClose}
      footer={null}
    >
      <List
        dataSource={emergencyContacts}
        renderItem={(item) => (
          <List.Item>
            <Text strong>{item.title}:</Text>&nbsp;<Text>{item.value}</Text>
          </List.Item>
        )}
      />
    </Modal>
  );
}
