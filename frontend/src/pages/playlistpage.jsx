import React from 'react';
import { useLocation } from 'react-router-dom';

function PlaylistPage() {
  const location = useLocation();
  const answers = location.state?.answers || [];

  return (
    <div>
      <h1>Playlist Page</h1>
      <p>사용자가 선택한 답변: </p>
      <ul>
        {answers.map((ans, idx) => (
          <li jey={idx}>{ans}</li>
        ))}
      </ul>
      {/* logic for spotify */}
    </div>
  );
}

export default PlaylistPage;
