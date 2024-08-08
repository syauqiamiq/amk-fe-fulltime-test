import {
  DownOutlined,
  FilterFilled,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import { Badge, Button, Dropdown, Input, Space, Tooltip } from "antd";
import React, { useState } from "react";
import ChatCard from "../ChatCard";

import { IChatSession } from "@/interfaces/chat";
import { dummyChatSession } from "@/constants/dummyChatSessionData";
import { useNavigate } from "react-router-dom";

interface IChatTabProps {}

const ChatTab = (props: IChatTabProps) => {
  const [sortDescending, setSorDecending] = useState(true);
  const [chatStatus, setChatStatus] = useState("Open");
  const navigate = useNavigate();

  const handleSortChange = () => {
    setSorDecending(!sortDescending);
  };

  const handleChatStatusChange = (e: any) => {
    setChatStatus(e.key);
  };
  return (
    <div>
      <div className="flex gap-1">
        <Input placeholder="Pencarian Nama, No. Ref, No. Invoice" />
        <Tooltip title="Filter">
          <Button type="default" shape="round" icon={<FilterFilled />} />
        </Tooltip>
      </div>
      <div className="mt-3 flex gap-6 overflow-y-scroll min-h-14  pt-3 ">
        <Badge count={10}>
          <Button>Semua</Button>
        </Badge>
        <Badge count={2}>
          <Button>Saya</Button>
        </Badge>
        <Badge count={3}>
          <Button>Unassigned</Button>
        </Badge>
        <Badge count={1}>
          <Button>Team</Button>
        </Badge>
        <Badge count={4}>
          <Button>Report</Button>
        </Badge>
      </div>
      <div className="flex w-full justify-between items-center mt-3">
        <Dropdown
          menu={{
            items: [
              {
                label: "Open",
                key: "Open",
                onClick: (e) => {
                  handleChatStatusChange(e);
                },
              },
              {
                label: "Closed",
                key: "Closed",
                onClick: (e) => {
                  handleChatStatusChange(e);
                },
              },
            ],
          }}
        >
          <Button>
            <Space>
              {chatStatus}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Tooltip title="Sorting">
          <Button
            type="default"
            shape="round"
            onClick={handleSortChange}
            icon={
              sortDescending ? (
                <SortAscendingOutlined />
              ) : (
                <SortDescendingOutlined />
              )
            }
          />
        </Tooltip>
      </div>
      <div className="flex flex-col gap-3 mt-3 w-full">
        {dummyChatSession.map((v: IChatSession, i) => {
          return (
            <ChatCard onClick={() => navigate("/chat/1")} key={i} data={v} />
          );
        })}
      </div>
    </div>
  );
};

export default ChatTab;
