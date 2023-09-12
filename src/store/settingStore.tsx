import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface SettingState {
  key: string;
  setKey: (key: string) => void;
}

const useSettingStore = create<SettingState>()(
  devtools(
    persist(
      (set) => ({
        key: "",
        setKey: (key) => set({ key: key }),
      }),
      {
        name: "setting-storage",
      },
    ),
  ),
);

export default useSettingStore;
