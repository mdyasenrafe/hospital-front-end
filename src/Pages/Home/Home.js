import React from "react";
// file
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Doctors from "./Doctors";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Doctors />
      <Contact />
    </div>
  );
};

export default Home;
