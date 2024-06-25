import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "@/modules/main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Main />
    </main>
  );
}
