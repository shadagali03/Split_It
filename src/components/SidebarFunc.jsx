import React from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';



function SidebarFunc() {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar>
        <Menu>
          <MenuItem component={<Link to="/" />}> Home </MenuItem>
          <MenuItem component={<Link to="/dashboard" />}> Dashboard </MenuItem>
          <MenuItem component={<Link to="/groups" />}> Groups </MenuItem>
          <MenuItem component={<Link to="/addexpense" />}> Add Expense </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  )
}

export default SidebarFunc