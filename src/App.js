import logo from './logo.svg';
import './App.css';
import { Home, Dashboard, Groups, Addexpense } from './pages';
import 'tailwindcss/tailwind.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path ="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/addexpense" element={<Addexpense />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
