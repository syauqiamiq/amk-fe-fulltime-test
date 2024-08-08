import { Suspense, useEffect, useState } from "react";
import ChatMobilePage from "./ChatMobilePage";
import ChatWebPage from "./ChatWebPage";
import useScreenSize from "@/libs/hooks/useScreenSize";

type Props = {};

const ChatEntrypointPage = (props: Props) => {
  const isMobile = useScreenSize({ size: 768 });

  return (
    <Suspense fallback={<div>Loading....</div>}>
      {isMobile ? <ChatMobilePage /> : <ChatWebPage />}
    </Suspense>
  );
};

export default ChatEntrypointPage;
