import Premium from "@/components/LandingPage/Premium";
import { Hero } from "../components/LandingPage/index";
import Header from "@/components/Header";
export default function Home() {
  return (
    <main className="section">
      <Hero />{" "}
      <Premium/>
    </main>
  );
}
