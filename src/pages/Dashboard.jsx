import React from 'react';
import SidebarFunc from '../components/SidebarFunc';
import BarChart from '../components/BarChart';
import ActivityFeed from '../components/ActivityFeed';
import Oauth from '../components/Oauth'

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <SidebarFunc />
      <div class="flex flex-col w-full h-full bg-pink-200">
        <div class="flex flex-row h-full">
          <div class="flex w-1/2">
            <div class="flex flex-col w-full">
              <div class="w-full h-1/2">
                <BarChart />
              </div>
              <div class="w-full h-1/2"></div>
            </div>
          </div>
          <div class="w-1/2 flex h-screen">
            <ActivityFeed />
          </div>
          {/* <Oauth /> */}
        </div>
      </div>
    </div>
  );
}


export default Dashboard;
