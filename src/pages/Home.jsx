import React from "react";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import NavBar from "../Components/NavBar";
import Features from './Features';

const Home = () => {
  return <div className="bg-indigo-50">
    <NavBar />
    <HeroSection/>
    <Features/>
    <Footer />
  </div>;
};

export default Home;
