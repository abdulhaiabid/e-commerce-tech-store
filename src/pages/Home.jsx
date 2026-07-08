import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Trend from "../components/Trend";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Trend />
      <Footer />
    </>
  );
}

export default Home;