import React from 'react';

const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-pink-200">
      <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
        <div className="md:flex-row md:flex">
          <div className="p-4">
            <img src="/logo.png" alt="logo" className="w-26 h-30 shadow-lg rounded-lg" />
          </div>
          <div className="p-4 flex flex-col justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-amber-700">SplitIt</h1>
              <h2 className="text-lg font-medium text-black">Simplify your group expenses!</h2>
            </div>
          </div>
          <div className="p-4 ml-auto flex items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
