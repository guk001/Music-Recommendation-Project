import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionPage from './pages/questionpage';
import PlaylistPage from './pages/playlistpage';
import HomePage from './pages/homepage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/playlist" element={<PlaylistPage />} />
        <Route path="/questionpage" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
