export interface IChat {
  id: number | any;
  senderName: string;
  chatDate: Date | string | any;
  content: string;
  type: string;
  assignee: string;
  isRead: boolean;
  recepient: string;
  chatType: string;
  platform: string;
}

export interface IChatSession {
  id: number | any;
  senderName: string;
  lastChatDate: string | Date | any;
  totalLastUnreadChat: number;
  lastChatContent: string;
  assigneeDetail: string;
  assignee: string;
  type: string;
}
