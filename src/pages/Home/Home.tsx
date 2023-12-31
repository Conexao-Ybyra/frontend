import "./Home.css";
import Hero from "../../components/Hero/hero";
import Features from "../../components/Features/features";
import Testimonials from "../../components/Testimonials/testimonials";
import Contato from "../Contato/Contato"
import MiniAbout from "../../components/miniAbout/miniAbout"
import Time from "../Equipe/Equipe"
import arrow from '../../assets/images/upward-arrow_2268143.png'

const Home = () => {
  
  return (
    <>
    <button className="fixed bottom-10 right-0" onClick={()=>{window.scrollTo(0,0)}}><img src={arrow} className="h-12 w-12"/></button>
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
