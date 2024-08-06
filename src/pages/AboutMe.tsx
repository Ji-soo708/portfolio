import React from "react";
import Toolbar from "../components/Toolbar";
import AboutMeHeader from "../components/AboutMeHeader";

function AboutMe() {
  return (
    <div>
      <Toolbar />
      <div className="mt-8 mx-8 md:mx-16 lg:mx-56 xl:mx-60">
        <AboutMeHeader />
      </div>
    </div>
  );
}

export default AboutMe;
