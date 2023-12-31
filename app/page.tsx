import About from "@/components/About";
import DailyDose from "@/components/DailyDose";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Join from "@/components/Join";
import Situation from "@/components/Situation";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="font-jose min-h-screen ">
      <Hero />
      <About />
      <DailyDose />
      <Situation />
      <Join />
      <Footer />
    </main>
  );
};
export default Home;
