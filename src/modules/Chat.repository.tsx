import useSettingStore from "@/store/settingStore";
import { OpenAI } from "openai";
import { useState } from "react";
import { IMessages } from "./Chat.types";

export const useGptStream = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState<IMessages[]>([]);
  const [messageBuffer, setMessageBuffer] = useState("");
  const { key } = useSettingStore(({ key }) => ({ key }));

  const openai = new OpenAI({
    apiKey: key,
    dangerouslyAllowBrowser: true,
  });

  const fetchMessage = async (prompt: string, retry = false) => {
    setError("");

    if (!key) {
      setIsLoading(false);
      setError("Key is empty");
      return;
    }

    if (!prompt) {
      setIsLoading(false);
      setError("Promt is empty");
      return;
    }

    if (!retry) {
      setMessages((prev) => [...prev, { role: "user", message: prompt }]);
    }

    setIsLoading(true);

    try {
      const chatCompletionStream = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
        stream: true,
      });

      let message = "";

      for await (const part of chatCompletionStream) {
        const response = part.choices[0]?.delta?.content || "";

        setMessageBuffer(message);
        message += response;
      }

      // console.log(message);
      setMessages((prev) => [...prev, { role: "assistance", message }]);
      setIsLoading(false);
      setMessageBuffer("");
    } catch (err: any) {
      setError(err.message);
      setIsLoading(false);
      setMessageBuffer("");
    }
  };

  const retry = () => {
    const lastUserMessage =
      messages.findLast((val) => val.role === "user")?.message || "";
    fetchMessage(lastUserMessage, true);
  };

  return { isLoading, error, messages, messageBuffer, fetchMessage, retry };
};
