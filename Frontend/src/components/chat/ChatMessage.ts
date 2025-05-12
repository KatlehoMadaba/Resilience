export interface ChatMessage {
    id: string;
    senderPersonId: string;
    receiverPersonId: string;
    content: string;
    isRead: boolean;
    sentAt: string;
}
