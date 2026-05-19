import Hero from "@/sections/Hero";
import Performance from "@/sections/Performance";
import Aerodynamics from "@/sections/Aerodynamics";
import FinalCTA from "@/sections/FinalCTA";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-matte-black selection:bg-racing-red selection:text-white">
      <Hero />
      <Performance />
      <Aerodynamics />
      <FinalCTA />
    </main>
  );
}
