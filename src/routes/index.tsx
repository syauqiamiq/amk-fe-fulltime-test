import MustMobileMiddleware from "@/libs/middlewares/MustMobileMiddleware";
import ChatEntrypointPage from "@/modules/chat/pages/ChatEntrypointPage";
import DetailChatMobilePage from "@/modules/chat/pages/DetailChatMobilePage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatEntrypointPage />,
  },
  {
    path: "/chat/:id",
    element: (
      <MustMobileMiddleware>
        <DetailChatMobilePage />
      </MustMobileMiddleware>
    ),
  },
]);
