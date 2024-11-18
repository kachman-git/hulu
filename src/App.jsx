import React from "react";
import Adds from "./components/Adds";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LiveSport from "./components/LiveSport";
import Section from "./components/Section";
import Showcase from "./components/Showcase";

const App = () => {
  return (
    <div>
      <Hero />
      <Adds />
      <Showcase />
      <Section />
      <LiveSport />
      <Footer />
    </div>
  );
};

export default App;
