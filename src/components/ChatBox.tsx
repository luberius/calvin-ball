import { SendHorizontal } from "lucide-react";
import { ChangeEvent, useState } from "react";

const ChatBox = () => {
  const [message, setMessage] = useState("");

  const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <div className="absolute flex gap-4 p-4 px-4 bottom-8 m-auto w-full md:w-3/4 xl:w-1/2 bg-gray-800 items-end rounded-xl shadow-2xl border border-gray-900">
      <textarea
        rows={1}
        className="m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 outline-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0"
        placeholder="Send a message"
        onChange={handleTextareaChange}
        value={message}
      />
      <button
        className="absolute bottom-3 right-4 bg-blue-600 p-1 rounded-md cursor-pointer hover:bg-blue-700 disabled:bg-gray-700 disabled:cursor-not-allowed disabled:text-gray-500"
        disabled={!message}
      >
        <SendHorizontal />
      </button>
    </div>
  );
};

export default ChatBox;
