import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <Header />
      <HomeHero />
    </main>
  );
}
