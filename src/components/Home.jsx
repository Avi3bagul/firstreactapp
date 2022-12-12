import React from "react";
import Samecomo from "./Samecomo";
import { Samecom1 } from "./Samecomo";
import orangemanimg from "../imges/orangemanimg1.png";
import teamimg from "../imges/teamimg.jpg";
import OurPrinc from "./OurPrinc";
import Team from "./Team";
import whoimg from '../imges/whoimg.png';
import heroimg1 from '../imges/heroimg1.png'
import bgimg2 from '../imges/bgimg2.png';
import Why from "./Why";



const Home = () => {
  return (
    <>
      <Samecomo
        title="Great Websites adds Greate Values"
        para="Provides you to Grow your Business Next Level"
        btn="Explore"
        img={orangemanimg}
        go="/services"
      />

      <Samecom1
        img={whoimg}
        title="Who We Are !"
        para="We, at icode, is a leading web development comapny in India that provides you with everything you need for your online presence. Be it building websites. So, what are you waiting for now? Contact us and get quotes for your project today!!"
        btn="More info"
        go="/"
        bg={bgimg2}
        tcol="light"
      />

      <OurPrinc />

      <Team />
      <Why />
    </>
  );
};

export default Home;
