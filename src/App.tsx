import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Bibbi from './pages/Bibbi';
import Mocacong from './pages/Mocacong';
import Baroging from './pages/Baroging';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/bibbi" element={<Bibbi />} />
          <Route path="/projects/mocacong" element={<Mocacong />} />
          <Route path="/projects/baroging" element={<Baroging />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
