import React from 'react';
import Toolbar from '../components/Toolbar';
import Header from '../components/MainHeader';
import ProjectScrollableBoxes from '../components/ProjectScrollableBoxes';
import BlogScrollableBoxes from '../components/BlogScrollableBoxes';

function Home() {
  return (
    <div>
      <Toolbar />
      <div className="ml-36">
        <Header />
        <div className='flex flex-col items-start mt-6'>
          <div className="flex space-x-2 ml-5">
            <p className="text-2xl font-bold text-[#1D1D1F] mt-20">
              Project.
            </p>
            <p className="text-2xl font-bold text-[#6E6E73] mt-20">
              사용자에게 가치를 제공하는 서비스.
            </p>
          </div>
        </div>
        <ProjectScrollableBoxes />
        <div className='flex flex-col items-start'>
          <div className="flex space-x-2 ml-5">
            <p className="text-2xl font-bold text-[#1D1D1F] mt-20">
              Dev-Blog.
            </p>
            <p className="text-2xl font-bold text-[#6E6E73] mt-20">
              기술적 고민을 담은 글.
            </p>
          </div>
        </div>
        <BlogScrollableBoxes />
      </div>
    </div>
  );
}

export default Home;
