import { IChatSession } from "@/interfaces/chat";

export const dummyChatSession: IChatSession[] = [
  {
    id: 1,
    senderName: "bpk. ahmad affas",
    totalLastUnreadChat: 3,
    lastChatDate: new Date().toISOString(),
    assignee: "Yaya Jujura",
    assigneeDetail: "CHO Yaya",
    type: "Customer",
    lastChatContent:
      "Assalamulaikam bapak/ibu, untuk pembayaran akan dilaksanakan hari ini pukul berapa ya? dan lokasinya dimana?",
  },

  {
    id: 2,
    senderName: "bpk. Dedi",
    totalLastUnreadChat: 4,
    lastChatDate: new Date().toISOString(),
    assignee: "Yaya Jujura",
    assigneeDetail: "CHO Yaya",
    type: "Customer",
    lastChatContent:
      "Assalamulaikam bapak/ibu, untuk pembayaran akan dilaksanakan hari ini pukul berapa ya? dan lokasinya dimana?",
  },
  {
    id: 3,
    senderName: "mb mimin jujura",
    totalLastUnreadChat: 1,
    lastChatDate: new Date().toISOString(),
    assignee: "Yaya Jujura",
    assigneeDetail: "CHO Yaya",
    type: "Customer",
    lastChatContent:
      "Assalamulaikam bapak/ibu, untuk pembayaran akan dilaksanakan hari ini pukul berapa ya? dan lokasinya dimana?",
  },
];
