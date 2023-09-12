import useSettingStore from "@/store/settingStore";
import { X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

interface IProps {
  open?: boolean;
  onClose?: () => void;
}

const SettingDialog: React.FC<IProps> = ({ open, onClose }) => {
  const [userInput, setUserInput] = useState("");
  const { key, setKey } = useSettingStore(({ key, setKey }) => ({
    key,
    setKey,
  }));

  const handleClose = () => {
    onClose?.();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userInput.trim() === "") return;

    setKey(userInput);
    setUserInput("");
    handleClose();
  };

  useEffect(() => {
    if (key) setUserInput(key);
  }, [key]);

  if (!open) {
    return <></>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900/50 z-30">
      <div className="w-full max-w-md mx-auto bg-slate-800 rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="tracking-wide">Settings</h1>
          <button
            className="bg-slate-700/50 p-1 rounded-md cursor-pointer hover:bg-slate-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-gray-200"
            onClick={handleClose}
          >
            <X />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-end">
          <input
            type="text"
            className="border border-gray-950 rounded-lg px-3 py-2 w-full bg-gray-900 outline-none focus:ring focus:border-gray-700"
            placeholder="API Key here.."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-700 text-sm text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingDialog;
