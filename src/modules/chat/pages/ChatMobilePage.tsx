import ChatCategoryTabs from "../components/tabs/ChatCategoryTabs";
import UserInformation from "../components/UserInformation";

const ChatMobilePage = () => {
  return (
    <div className="block sm:hidden p-5">
      <UserInformation
        name="Muhammad Syauqi Amiq Amrullah"
        profession="Software Engineer"
      />
      <ChatCategoryTabs />
    </div>
  );
};

export default ChatMobilePage;
