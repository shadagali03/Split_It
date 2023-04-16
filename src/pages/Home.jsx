import React from 'react';
import { Oauth, SidebarFunc } from '../components';

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
              <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-700 to-pink-300 text-transparent bg-clip-text stroke-black stroke-1">SplitIt</h1>
              <h2 className="text-4xl font-medium text-black">Simplify your group expenses!</h2>
            </div>
            <Oauth />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
