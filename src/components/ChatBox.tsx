import { SendHorizontal } from "lucide-react";
import { ChangeEvent, useState } from "react";

interface IProps {
  onSend?: (message: string) => void;
}

const ChatBox: React.FC<IProps> = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  const handleSend = () => {
    onSend?.(message);
    setMessage("");
  };

  return (
    <div className="absolute flex flex-col gap-4 px-4 bottom-8 m-auto w-full justify-end items-end md:w-3/4 xl:w-1/2">
      <div className="flex w-full p-4 bg-gray-800 rounded-xl border border-gray-900 items-end shadow-2xl">
        <textarea
          rows={1}
          className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 outline-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0"
          placeholder="Send a message"
          onChange={handleTextareaChange}
          value={message}
        />
        <button
          className="absolute bottom-3 right-8 bg-blue-600 p-1 rounded-md cursor-pointer hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed disabled:text-gray-500"
          disabled={!message}
          onClick={handleSend}
        >
          <SendHorizontal />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
