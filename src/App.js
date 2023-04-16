import './App.css';
import { Home, Dashboard, Groups, Addexpense } from './pages';
import Protected from './pages/Protected';
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { auth } from './firebase';
import { useState } from 'react';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser != null && auth.currentUser !== undefined)
  auth.onAuthStateChanged(user => setIsLoggedIn(user != null && user !== undefined))
  return (
    <div className="App font-mono">
          <BrowserRouter>
            <Routes>
              <Route path ="/" element={<Home />} />
              <Route path="/dashboard" element={
                <Protected isLoggedIn={isLoggedIn}>
                  <Dashboard />
                </Protected>
              } />
              <Route path="/groups" element={
                <Protected isLoggedIn={isLoggedIn}>
                  <Groups />
                </Protected>
              } />
              <Route path="/addexpense" element={
                <Protected isLoggedIn={isLoggedIn}>
                  <Addexpense />
                </Protected>
              } />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
