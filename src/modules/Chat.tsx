import ChatBox from "@/components/ChatBox";
import ChatList from "@/components/ChatList";
import Header from "@/components/Header";
import { useGptStream } from "./Chat.repository";

const Chat = () => {
  const { isLoading, error, messages, messageBuffer, fetchMessage, retry } =
    useGptStream();

  const handleSend = (message: string) => {
    fetchMessage(message);
  };

  return (
    <>
      <Header />
      <ChatList
        isLoading={isLoading}
        messages={messages}
        messageBuffer={messageBuffer}
        error={error}
        onRetry={retry}
      />
      <ChatBox onSend={handleSend} />
    </>
  );
};

export default Chat;
