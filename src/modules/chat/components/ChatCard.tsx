import { IChatSession } from "@/interfaces/chat";
import { dateFormatter } from "@/libs/functions/date-formatter";
import { Card, Tag } from "antd";

interface IChatCard {
  data: IChatSession;
  onClick: () => void;
}

const ChatCard = ({ data, onClick }: IChatCard) => {
  return (
    <Card
      onClick={onClick}
      title={
        <div className="flex flex-col">
          <h1 className="font-poppins font-medium uppercase text-base">
            {data.senderName}
          </h1>
          <h2 className="font-poppins font-normal uppercase text-xs text-[#979797D9]">
            {dateFormatter(data.lastChatDate, "HH:ii")} |{" "}
            {dateFormatter(data.lastChatDate, "dd-MM-yyy")}
          </h2>
        </div>
      }
      className="w-full"
      extra={
        <div className="flex justify-center items-center text-white w-5 h-5 rounded-full bg-red-500">
          {data.totalLastUnreadChat}
        </div>
      }
    >
      <p className="font-poppins text-sm text-[#979797D9] line-clamp-2 font-normal">
        {data.lastChatContent}
      </p>

      <div className="mt-5 flex w-full justify-between items-center">
        <h3 className="font-poppins text-sm text-[#979797D9]">
          {data.assigneeDetail} |{" "}
          <span className="text-amk-blue font-medium">{data.assignee}</span>{" "}
        </h3>
        <Tag color="#87d068" className="rounded-lg">
          {data.type}
        </Tag>
      </div>
    </Card>
  );
};

export default ChatCard;
