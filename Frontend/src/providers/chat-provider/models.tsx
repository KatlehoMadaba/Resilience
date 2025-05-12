export interface IChatMessage {
  id: string;
  senderPersonId: string;
  receiverPersonId: string;
  content: string;
  isRead: boolean;
  sentAt: string;
}
