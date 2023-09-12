import Chat from "@/modules/Chat";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen relative flex-col items-center justify-between py-24 ${inter.className}`}
    >
      <Chat />
    </main>
  );
}
