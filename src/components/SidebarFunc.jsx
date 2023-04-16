import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useLocation } from 'react-router-dom';

function SidebarFunc() {
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  // update the active link when the location changes
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className="flex h-full font-semibold shadow-2xl">
      <Sidebar>
        <Menu>
          <div className="md:flex-row md:flex border-b border-gray-300">
            <div className="p-4">
              <Link to="/">
                <img src="/logo.png" alt="logo" className="w-22 h-26 shadow-lg rounded-lg" />
              </Link>
            </div>
            <div className="p-4 flex flex-col justify-center">
              <div className="text-left">
                <Link to="/">
                  <h1 className="text-4xl font-bold text-amber-800">SplitIt</h1>
                </Link>
              </div>
            </div>
          </div>
          <MenuItem
            component={<Link to="/" />}
            className={`text-xl border-b border-gray-300  ${
              activeLink === '/' ? 'hover:bg-pink-400 bg-pink-200' : 'text-pink-600'
            }`}
          >
            Home
          </MenuItem>
          <MenuItem
            component={<Link to="/dashboard" />}
            className={`text-xl border-b border-gray-300 ${
              activeLink === '/dashboard' ? 'hover:bg-pink-400 bg-pink-200' : 'text-pink-600'
            }`}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            component={<Link to="/groups" />}
            className={`text-xl border-b border-gray-300 ${
              activeLink === '/groups' ? 'hover:bg-pink-400 bg-pink-200' : 'text-pink-600'
            }`}
          >
            Groups
          </MenuItem>
          <MenuItem
            component={<Link to="/addexpense" />}
            className={`text-xl border-b border-gray-300 ${
              activeLink === '/addexpense' ? 'hover:bg-pink-400 bg-pink-200' : 'text-pink-600'
            }`}
          >
            Add Expense
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SidebarFunc;
