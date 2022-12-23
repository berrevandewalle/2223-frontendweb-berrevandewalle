import { Routes, Route, Navigate } from 'react-router-dom';
import FietsenList from './components/Fietsen/FietsenList';
import FietsenForm from './components/Fietsen/FietsenForm';
import OverzichtList from './components/Overzicht/OverzichtList';
import {
  useTheme,
} from './contexts/Theme.context';
import Navbar from './components/Navbar';
import React from 'react';
import RequireAuth from './components/authentication/RequireAuth';
import AuthLanding from './components/authentication/AuthLanding';

function App() {
  const {
    theme,
    oppositeTheme,
  } = useTheme();

 
  return (
    <div id="app" className={`bg-${theme} text-${oppositeTheme} `}  >
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/Overzicht" />} />
        <Route path="/Overzicht" element={<OverzichtList />} />
        <Route path="/Fietsen" element={<RequireAuth><FietsenList /></RequireAuth>} />
        <Route path="/Fietsen/add" element={<RequireAuth><FietsenForm /></RequireAuth>} />
        <Route path="/Fietsen/edit/:id" element={<RequireAuth><FietsenForm /></RequireAuth>} />
        <Route path="/login" element={<AuthLanding />} />

      </Routes>
    </div>
  );
}
export default App;