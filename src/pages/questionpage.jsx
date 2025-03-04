import React from 'react';
import { useNavigate } from "react-router-dom";

const QuestionPage = () => {
  const navigate = useNavigate();

  const goToPlaylist = () => {
    navigate("/playlist"); // Navigate to Playlist Page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Music App</h1>
      <div>
        <h1>Question Page</h1>
        <p>여기에 퀴즈 질문 UI를 넣으세요.</p>
      </div>
      <button onClick={goToPlaylist} style={{ padding: "10px 20px", fontSize: "16px" }}>
        Go to Playlist
      </button>
    </div>
  );
};

export default QuestionPage;
