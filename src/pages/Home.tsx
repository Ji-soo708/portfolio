import React, { useEffect } from "react";
import Toolbar from "../components/Toolbar";
import Header from "../components/Header";
import ProjectScrollableBoxes from "../components/ProjectScrollableBoxes";
import BlogScrollableBoxes from "../components/BlogScrollableBoxes";
import SkillScrollableBoxes from "../components/SkillScrollableBoxes";
import EtcScrollableBoxes from "../components/EtcScrollableBoxes";
import Footer from "../components/Footer";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Toolbar />
      <div className="ml-0 md:ml-12 lg:ml-24 xl:ml-48">
        <Header />
        {/* Project Section */}
        <div className="flex flex-col items-start mt-3 lg:mt-5 xl:mt-5">
          <div className="flex space-x-2 ml-5">
            <p className="text-2xl font-bold text-[#1D1D1F] mt-20">Project.</p>
            <p className="text-2xl font-bold text-[#6E6E73] mt-20">
              사용자에게 가치를 제공하는 서비스.
            </p>
          </div>
        </div>
        <ProjectScrollableBoxes />

        {/* Blog Section */}
        <div className="flex flex-col items-start">
          <div className="flex space-x-2 ml-5">
            <p className="text-2xl font-bold text-[#1D1D1F] mt-20">Dev-Blog.</p>
            <p className="text-2xl font-bold text-[#6E6E73] mt-20">
              기술적 고민을 담은 글.
            </p>
          </div>
        </div>
        <BlogScrollableBoxes />

        {/* Skill Section */}
        <div className="flex flex-col items-start">
          <div className="flex space-x-2 ml-5">
            <p className="text-2xl font-bold text-[#1D1D1F] mt-20">Skill.</p>
            <p className="text-2xl font-bold text-[#6E6E73] mt-20">
              아이디어를 현실로 실현하는 기술.
            </p>
          </div>
        </div>
        <SkillScrollableBoxes />

        {/* Etc Section */}
        <div className="flex flex-col items-start">
          <div className="flex space-x-2 ml-5">
            <p className="text-2xl font-bold text-[#1D1D1F] mt-20">Etc.</p>
            <p className="text-2xl font-bold text-[#6E6E73] mt-20">
              성장과 배움의 순간들.
            </p>
          </div>
        </div>
        <EtcScrollableBoxes />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
