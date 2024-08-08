import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import React from "react";

interface IUserInformationProps {
  name: string;
  profession: string;
}

const UserInformation = ({ name, profession }: IUserInformationProps) => {
  return (
    <div className="flex items-center w-full gap-3">
      <div>
        <Avatar size={50} icon={<UserOutlined />} />
      </div>

      <div className="d-flex w-full flex-col">
        <h1 className="font-poppins font-medium text-sm">{name}</h1>
        <h2 className="font-poppins font-normal text-xs text-[#A5A5A5]">
          {profession}
        </h2>
      </div>
    </div>
  );
};

export default UserInformation;
