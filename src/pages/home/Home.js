import { useState } from "react";
import { Footer } from "../../components/footer/Footer";
import { HeroSection } from "../../components/heroSection/HeroSection";
import { InfoSection } from "../../components/infoSection/InfoSection";
import { Navbar } from "../../components/navbar/Navbar";
import { ServicesInfo } from "../../components/servicesInfo/ServicesInfo";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { homeObjOne, homeObjThree, homeObjTwo } from "../../dataInfo/Data";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjOne} />
      <ServicesInfo />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};
