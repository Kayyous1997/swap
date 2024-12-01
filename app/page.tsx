import { Header } from "@/components/layout/Header";
import { SwapCard } from "@/components/features/SwapCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container flex min-h-screen flex-col items-center justify-center py-20">
        <div className="relative w-full max-w-[450px]">
          <div
            className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-20 blur-3xl"
            aria-hidden="true"
          />
          <SwapCard />
        </div>
      </main>
    </>
  );
}