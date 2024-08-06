import React from "react";
import Toolbar from "../components/Toolbar";
import AboutMeHeader from "../components/AboutMeHeader";
import EducationBox from "../components/EducationBox";
import IntroduceBox from "../components/IntroduceBox";
import ProjectSummaryBox from "../components/ProjectSummaryBox";
import EtcBox from "../components/EtcBox";

function AboutMe() {
  return (
    <div>
      <Toolbar />
      <div className="mt-8 mx-10 md:mx-20 lg:mx-60 xl:mx-64">
        <AboutMeHeader />
        <EducationBox />
        <IntroduceBox />
        <ProjectSummaryBox />
        <EtcBox />
      </div>
    </div>
  );
}

export default AboutMe;
