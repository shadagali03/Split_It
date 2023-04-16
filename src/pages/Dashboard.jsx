import React from 'react';
import SidebarFunc from '../components/SidebarFunc';
import BarChart from '../components/BarChart';
import ActivityFeed from '../components/ActivityFeed';

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <SidebarFunc />
      <div className="flex flex-col w-full h-full bg-pink-200">
        <div className="flex flex-row h-full">
          <div className="flex w-1/2">
            <div className="flex flex-col w-full">
              <div className="w-full h-1/2">
                <BarChart />
              </div>
              <div className="w-full h-1/2"></div>
            </div>
          </div>
          <div className="w-1/2 flex h-screen">
            <ActivityFeed />
          </div>
          {/* <Oauth /> */}
        </div>
      </div>
    </div>
  );
}


export default Dashboard;
