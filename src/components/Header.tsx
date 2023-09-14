import { Settings2 } from "lucide-react";
import SettingDialog from "./SerttingDialog";
import { useState } from "react";

const Header = () => {
  const [openSettingDialog, setOpenSettingDialog] = useState(false);

  return (
    <div className=" relative flex justify-center w-full mx-auto w-full md:w-3/4 xl:w-1/2">
      <h1 className="text-gray-500 font-black tracking-wide text-2xl select-none">
        Calvin Ball
      </h1>
      <button
        className="absolute right-4 bg-slate-800 p-1 rounded-md cursor-pointer hover:bg-slate-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
        onClick={() => setOpenSettingDialog(true)}
        data-test="setting-button"
      >
        <Settings2 className="text-gray-300" />
      </button>
      <SettingDialog
        open={openSettingDialog}
        onClose={() => setOpenSettingDialog(false)}
      />
    </div>
  );
};

export default Header;
