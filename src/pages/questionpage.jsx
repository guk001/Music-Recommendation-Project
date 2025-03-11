import React from 'react';
import { useNavigate } from "react-router-dom";
import './questionpage.css';

const QuestionPage = () => {
  const navigate = useNavigate();

  const goToPlaylist = () => {
    navigate("/playlist"); // Navigate to Playlist Page
  };

  return (
    <div className="question-container">
      {/* Import Google Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" rel="stylesheet" />

      {/* Title */}
      <p className="question">How Would You Describe Your Feeling in Color?</p>

      {/* Options */}
      <div className="middle">
        <div className="options-container">
          <div className="option">
            <div className="number">1</div>
            <div className="content">Quis autem vel eum iure reprehenderit.Quis autem vel eum iure reprehenderit.</div>
          </div>
          <div className="option">
            <div className="number">2</div>
            <div className="content">Quis autem vel eum iure reprehenderit.Quis autem vel eum iure reprehenderit.</div>
          </div>
          <div className="option">
            <div className="number">3</div>
            <div className="content">Quis autem vel eum iure reprehenderit.Quis autem vel eum iure reprehenderit.</div>
          </div>
          <div className="option">
            <div className="number">4</div>
            <div className="content">Quis autem vel eum iure reprehenderit.Quis autem vel eum iure reprehenderit.</div>
          </div>
        </div>
      </div>

      {/* Navigation Button */}
      <button className="navigate-button" onClick={goToPlaylist}>
        Go to Playlist
      </button>
    </div>
  );
};

export default QuestionPage;
