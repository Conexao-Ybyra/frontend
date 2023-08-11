import "./Home.css";
import Hero from "../../components/Hero/hero";
import Features from "../../components/Features/features";
import Testimonials from "../../components/Testimonials/testimonials";
import Contato from "../Contato/Contato"
import MiniAbout from "../../components/miniAbout/miniAbout"
import Time from "../Equipe/Equipe"

const Home = () => {
  return (
    <>
      <Hero/>
      <Features/>
      <MiniAbout/>
      <Time/>
      <Testimonials/>
      <Contato/>
    </>
  );
};

export default Home;
