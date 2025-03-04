import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionPage from './pages/questionpage'; 
import PlaylistPage from './pages/playlistpage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionPage />} />  {/* Home Page */}
        <Route path="/playlist" element={<PlaylistPage />} /> {/* Playlist Page */}
      </Routes>
    </Router>
  );
}

export default App;
