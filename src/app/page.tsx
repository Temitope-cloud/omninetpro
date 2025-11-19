import React from "react";
import Herosection from "./component/HeroSection";
import ShortAboutSection from "./component/ShortAboutSection";
import BestProject from "./component/BestProject";
import OurServices from "./component/OurServices";
import HeroSectionTwo from "./component/HeroSectionTwo";
import AboutUsSection from "./component/AboutUsSection";
import OurTeam from "./component/OurTeam";

const Home = () => {
  return (
    <>
      <HeroSectionTwo />
      {/* <Herosection /> */}
      <ShortAboutSection />
      <AboutUsSection />

      <BestProject />
      <OurServices />
      <OurTeam />
    </>
  );
};

export default Home;
