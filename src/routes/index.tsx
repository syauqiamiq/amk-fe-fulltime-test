import ChatEntrypointPage from "@/modules/chat/pages/ChatEntrypointPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatEntrypointPage />,
  },
]);
