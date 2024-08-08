import { Tabs } from "antd";
import React from "react";
import ChatTab from "./ChatTab";

interface IChatCategoryProps {}

const ChatCategoryTabs = (props: IChatCategoryProps) => {
  return (
    <Tabs
      className="mt-5"
      defaultActiveKey="1"
      tabPosition={"top"}
      style={{ height: 220 }}
      items={[
        {
          label: <div className="font-poppins ">Chats</div>,
          key: "chats",
          children: <ChatTab />,
        },
        {
          label: `Groups`,
          key: "groups",
          children: "Groups Tab",
        },
        {
          label: `Channels`,
          key: "channels",
          children: "Channels Tab",
        },
      ]}
    />
  );
};

export default ChatCategoryTabs;
