export interface IChat {
  senderName: string;
  chatDate: string;
  content: string;
  type: string;
  assignee: string;
  isRead: boolean;
  recepient: string;
  platform: string;
}

export interface IChatSession {
  senderName: string;
  lastChatDate: string | Date | any;
  totalLastUnreadChat: number;
  lastChatContent: string;
  assigneeDetail: string;
  assignee: string;
  type: string;
}
