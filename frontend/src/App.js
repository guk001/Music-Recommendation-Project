import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionPage from './pages/questionpage';
import PlaylistPage from './pages/playlistpage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionPage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
      </Routes>
    </Router>
  );
}

export default App;
