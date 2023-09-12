import { IMessages } from "@/modules/Chat.types";
import { Bot, RefreshCcw, User } from "lucide-react";

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
  return (
    <div className="flex flex-col w-full">
      {messages.map((val) => (
        <div className={`${val.role}-chat py-8`}>
          <div className="w-full md:w-3/4 xl:w-1/2 m-auto flex gap-8">
            {val.role === "user" && (
              <div>
                <User />
              </div>
            )}
            {val.role === "assistance" && (
              <div>
                <Bot />
              </div>
            )}
            <span>{val.message}</span>
          </div>
        </div>
      ))}
      {isLoading && !messageBuffer && (
        <div className={`assistance-chat py-8 buffer`}>
          <div className="w-full md:w-3/4 xl:w-1/2 m-auto flex gap-8">
            <div>
              <Bot />
            </div>
            <span>...</span>
          </div>
        </div>
      )}
      {isLoading && messageBuffer && (
        <div className={`assistance-chat py-8 buffer`}>
          <div className="w-full md:w-3/4 xl:w-1/2 m-auto flex gap-8">
            <div>
              <Bot />
            </div>
            <span>{messageBuffer}</span>
          </div>
        </div>
      )}
      {!isLoading && error && (
        <div className={`assistance-chat py-8`}>
          <div className="w-full md:w-3/4 xl:w-1/2 m-auto flex flex-col items-center gap-4">
            <div className="flex gap-8 w-full">
              <div className="text-red-400">
                <Bot />
              </div>
              <span className="text-red-400">{error}</span>
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
