import React from 'react';
import Oauth from '../components/Oauth'
import SidebarFunc from '../components/SidebarFunc';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-pink-200">
      <SidebarFunc />
      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex-row md:flex">
          <div className="p-4">
            <img src="/logo.png" alt="logo" className="w-26 h-30 shadow-lg rounded-lg" />
          </div>
          <div className="p-4 flex flex-col justify-center">
            <div className="text-left">
              <h1 className="text-5xl font-bold text-amber-700">SplitIt</h1>
              <h2 className="text-lg font-medium text-black">Simplify your group expenses!</h2>
            </div>
            <Oauth />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
