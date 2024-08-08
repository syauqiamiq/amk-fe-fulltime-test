import { dummyChat } from "@/constants/dummyChat";
import { dateFormatter } from "@/libs/functions/date-formatter";
import {
  ArrowLeftOutlined,
  CaretRightFilled,
  LeftOutlined,
  SettingFilled,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Drawer, Input, Select } from "antd";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import MessageCard from "../components/MessageCard";

const DetailChatMobilePage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div>
        <div className="min-h-16 justify-between items-center bg-white fixed top-0 flex p-2 w-full ">
          <div className="flex gap-3">
            <LeftOutlined onClick={() => navigate("/")} />
            <div className="flex flex-col">
              <h1 className="font-poppins font-medium uppercase text-base">
                bpk. Ahmad affas
              </h1>
              <h2 className="font-poppins font-normal text-xs text-[#979797]">
                +62123123123123123
              </h2>
            </div>
          </div>
          <div>
            <SettingOutlined
              className="text-2xl"
              onClick={() => showDrawer()}
            />
          </div>
        </div>
        <InfiniteScroll
          className="bg-amk-chat-bg mt-14 mb-28 p-5 min-h-[100vh] flex flex-col-reverse gap-4 "
          dataLength={dummyChat.length}
          next={() => {
            console.log("Infinite Load");
          }}
          hasMore={true}
          loader={<>LOADING</>}
          scrollableTarget="scrollableDiv"
          inverse={true}
        >
          {dummyChat.map((v, index) => (
            <MessageCard key={index} data={v} />
          ))}
        </InfiniteScroll>
        <div className="min-h-24 flex-col gap-2  bg-white fixed bottom-0 flex p-2 w-full">
          <div className="flex w-full justify-between items-center">
            <div>
              <h1 className="font-poppins font-medium text-sm">Sales Aktif:</h1>
              <h1 className="font-poppins font-normal text-sm text-amk-green">
                Yaya Jujura
              </h1>
            </div>
            <h3 className="text-amk-blue font-poppins underline text-sm">
              Ganti sales aktif
            </h3>
          </div>
          <div className="flex w-full">
            <Input placeholder="Kirim pesan..." />
            <CaretRightFilled className="text-4xl text-amk-blue" />
          </div>
        </div>
        <div className="w-full z-[1]">
          <Drawer title="Edit Data" size="large" onClose={onClose} open={open}>
            <div className="flex flex-col w-full gap-2">
              <div className="flex flex-col ">
                <div className="flex justify-between mb-1">
                  <h5 className="text-sm font-poppins ">Nama</h5>
                </div>
                <Input placeholder="Nama" />
              </div>
              <div className="flex flex-col ">
                <div className="flex justify-between mb-1">
                  <h5 className="text-sm font-poppins ">Pipeline</h5>
                </div>
                <Select
                  defaultValue="b2b"
                  onChange={() => {}}
                  options={[
                    { value: "b2b", label: "B2B" },
                    { value: "b2c", label: "B2C" },
                    { value: "c2c", label: "C2C" },
                  ]}
                />
              </div>
              <div className="flex flex-col ">
                <div className="flex justify-between mb-1">
                  <h5 className="text-sm font-poppins ">Stages</h5>
                </div>
                <Select
                  defaultValue="greeting"
                  onChange={() => {}}
                  options={[{ value: "greeting", label: "Greeting" }]}
                />
              </div>
              <div className="flex flex-col ">
                <div className="flex justify-between mb-1">
                  <h5 className="text-sm font-poppins ">Sumber</h5>
                </div>
                <Select
                  defaultValue="artikel"
                  onChange={() => {}}
                  options={[{ value: "artikel", label: "Artikel" }]}
                />
              </div>
              <div className="flex flex-col ">
                <div className="flex justify-between mb-1">
                  <h5 className="text-sm font-poppins ">Sales Owner</h5>
                </div>
                <Select
                  defaultValue="yaya"
                  onChange={() => {}}
                  options={[{ value: "yaya", label: "Yaya Jujura" }]}
                />
              </div>
              <div className="flex flex-col ">
                <div className="flex justify-between mb-1">
                  <h5 className="text-sm font-poppins ">Kategori</h5>
                </div>
                <Select
                  defaultValue="b2b"
                  onChange={() => {}}
                  options={[
                    { value: "b2b", label: "B2B" },
                    { value: "b2c", label: "B2C" },
                    { value: "c2c", label: "C2C" },
                  ]}
                />
              </div>
              <Button type="primary">Simpan</Button>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
};

export default DetailChatMobilePage;
