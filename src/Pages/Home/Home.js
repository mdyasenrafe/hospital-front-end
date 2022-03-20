import React from "react";
// file
import About from "./About";
import Banner from "./Banner";
import ClientPage from "./ClientPage";
import Contact from "./Contact";
import Doctors from "./Doctors";
import Review from "./Review";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <ClientPage />
      <Doctors />
      <Review />
      <Contact />
    </div>
  );
};

export default Home;
