import React from 'react';
import Oauth from '../components/Oauth'


const Home = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-xl">
        <div className="md:flex">
          <div className="p-4">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-vector%2Fabstr" alt="logo" className="w-16 h-16" />
          </div>
          <div className="p-4">
            <h1 className="text-3xl font-bold text-blue-800">Home</h1>
            <h2 className="text-lg font-medium text-gray-600">Subtitle</h2>
          </div>
          <div className="p-4 ml-auto">
            <Oauth />
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
