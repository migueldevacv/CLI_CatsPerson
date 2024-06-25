import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Inter } from "next/font/google";
import Main from "@/modules/main";
import background from "@/img/background.png"

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`bg-[${background.src}] bg-cover`}>
        <Main />
      </main>
    </QueryClientProvider>
  );
}
