import { IChat } from "@/interfaces/chat";
import { dateFormatter } from "@/libs/functions/date-formatter";
import React from "react";

interface IMessageCardProps {
  data: IChat;
}

const MessageCard = ({ data }: IMessageCardProps) => {
  return data.chatType === "FROM" ? (
    <div>
      <div className="bg-white p-2 shadow-md rounded-bl-none rounded-lg">
        <p className="font-poppins text-sm font-normal">{data.content}</p>
        <div className="font-poppins text-xs mt-2  text-[#979797]">
          {dateFormatter(data.chatDate, "dd-MM-yyy")} |{" "}
          {dateFormatter(data.chatDate, "HH:ii")}
        </div>
      </div>
      <div className="flex w-full font-poppins text-xs mt-2  text-[#979797] ">
        {data.senderName} | melalui {data.platform}
      </div>
    </div>
  ) : (
    <div>
      <div className="bg-amk-light-blue p-2 shadow-md rounded-br-none rounded-lg">
        <p className="font-poppins text-sm font-normal">{data.content}</p>
        <div className="flex w-full justify-end font-poppins text-xs mt-2  text-[#979797]">
          {dateFormatter(data.chatDate, "dd-MM-yyy")} |{" "}
          {dateFormatter(data.chatDate, "HH:ii")}
        </div>
      </div>
      <div className="flex w-full justify-end font-poppins text-xs mt-2  text-[#979797] ">
        {data.senderName} | melalui {data.platform}
      </div>
    </div>
  );
};

export default MessageCard;
