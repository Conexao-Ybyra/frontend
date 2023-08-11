import { Link } from "react-router-dom";
import "./Home.css";
import Hero from "../../components/Hero/hero";
import Features from "../../components/Features/features";
import About from "../About/About";
import MiniTeam from "../../components/miniTeam/miniTeam";
import Testimonials from "../../components/Testimonials/testimonials";
import Contact2 from "../../components/Contact/contact2";
import MiniAbout from "../../components/miniAbout/miniAbout"

const Home = () => {
  return (
    <>
      <Hero/>
      <Features/>
      <MiniAbout/>
      <MiniTeam/>
      <Testimonials/>
      <Contact2/>
    </>
  );
};

export default Home;
