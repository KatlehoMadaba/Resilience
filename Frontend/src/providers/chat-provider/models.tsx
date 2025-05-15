export interface IChatMessage {
  id?: string;
  senderPersonId: string;
  receiverPersonId: string;
  content: string;
  isRead?: boolean;
  sentAt: string;
}
export interface ISendMessage {
  receiverPersonId: string;
  content: string;
}
export interface IGetAllMessagesWithWithPersonId {
  id: string;
}
