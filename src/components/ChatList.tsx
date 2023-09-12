import { IMessages } from "@/modules/Chat.types";
import { Bot, RefreshCcw, User } from "lucide-react";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";

interface IProps {
  messages: IMessages[];
  messageBuffer: string;
  error: string;
  isLoading: boolean;
  onRetry?: () => void;
}

const ChatList: React.FC<IProps> = ({
  messages,
  error,
  messageBuffer,
  isLoading,
  onRetry,
}) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, listRef.current?.scrollHeight || 0);
  }, [messageBuffer, isLoading]);

  return (
    <div className="flex flex-col w-full" ref={listRef}>
      {messages.map((val, index) => (
        <div className={`${val.role}-chat py-8`} key={`${val.role}${index}`}>
          <div className="w-full md:w-3/4 xl:w-1/2 px-6 md:p-0 m-auto flex gap-5 md:gap-8">
            {val.role === "user" && (
              <>
                <div>
                  <User />
                </div>
                <p>{val.message}</p>
              </>
            )}
            {val.role === "assistance" && (
              <>
                <div>
                  <Bot />
                </div>
                <div className="message-content">
                  <ReactMarkdown>{val.message}</ReactMarkdown>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
      {isLoading && !messageBuffer && (
        <div className={`assistance-chat py-8 buffer`}>
          <div className="w-full md:w-3/4 xl:w-1/2 px-6 md:p-0 m-auto flex gap-5 md:gap-8">
            <div>
              <Bot />
            </div>
            <span>...</span>
          </div>
        </div>
      )}
      {isLoading && messageBuffer && (
        <div className={`assistance-chat py-8 buffer`}>
          <div className="w-full md:w-3/4 xl:w-1/2 px-6 md:p-0 m-auto flex gap-5 md:gap-8">
            <div>
              <Bot />
            </div>
            <div className="message-content">
              <ReactMarkdown>{messageBuffer}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
      {!isLoading && error && (
        <div className={`assistance-chat py-8`}>
          <div className="w-full md:w-3/4 xl:w-1/2 m-auto flex flex-col gap-6 items-center">
            <div className="flex gap-5 md:gap-8 px-6 md:p-0 w-full">
              <div className="text-red-400">
                <Bot />
              </div>
              <p className="text-red-400 w-full">{error}</p>
            </div>
            {error && (
              <button
                className="flex items-center gap-2 bg-blue-800 p-2 px-3 rounded-md cursor-pointer hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed disabled:text-gray-500 text-sm border border-blue-900 shadow-2xl"
                onClick={onRetry}
              >
                <RefreshCcw size={14} />
                Retry
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatList;
