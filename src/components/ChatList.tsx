import { Bot, User } from "lucide-react";

const ChatList = () => {
  const mock = [
    { role: "user", message: "hello" },
    { role: "assistance", message: "world" },
  ];
  return (
    <div className="flex flex-col w-full">
      {mock.map((val) => (
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
    </div>
  );
};

export default ChatList;
