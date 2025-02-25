import React, { useState } from "react";
import "./playlistpage.css";
import IU1 from "./album/IU_1.jpg";
import IU2 from "./album/IU_2.jpg";
import IU3 from "./album/APT.png";
import IU4 from "./album/IU_4.jpeg";
import IU5 from "./album/IU_5.png";
import IU6 from "./album/IU_6.png";
import IU7 from "./album/IU_7.png";
import IU8 from "./album/IU_8.png";
import PlayIcon from "./album/play_button.png";

const PlaylistPage = () => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const playlists = [
    { img: IU1, title: "Luther", artist: "Kendrick Lamar and SZA", spotifyUri: "45J4avUb9Ni0bnETYaYFVJ" },
    { img: IU2, title: "Die With A Smile", artist: "Lady Gaga and Bruno Mars", spotifyUri: "2plbrEY59IikOBgBGLjaoe" },
    { img: IU3, title: "APT.", artist: "Bruno Mars and Rosé", spotifyUri: "5vNRhkKd0yEAg8suGBpjeY" },
    { img: IU4, title: "BIRDS OF A FEATHER", artist: "Billie Eilish", spotifyUri: "6dOtVTDdiauQNBQEDOtlAB" },
    { img: IU5, title: "After Hours", artist: "The Weeknd", spotifyUri: "2p8IUWQDrpjuFltbdgLOag" },
    { img: IU6, title: "Angels", artist: "The XX", spotifyUri: "3zsRP8rH1kaIAo9fmiP4El" },
    { img: IU7, title: "If You Wait", artist: "London Grammar", spotifyUri: "3NyX0UgDNvhP2zyeBaAbpu" },
    { img: IU8, title: "Zebulon", artist: "Kungs", spotifyUri: "22TTatdk4eLlsQ2mXKRozH" },
  ];

  const handlePlay = (spotifyUri) => {
    if (!spotifyUri) {
      console.error("Invalid Spotify URI:", spotifyUri);
      return;
    }
    console.log("Playing track:", `https://open.spotify.com/embed/track/${spotifyUri}`);
    setCurrentTrack(spotifyUri);
  };
  
  const handleStartOver = () => {
    setCurrentTrack(null);
  };

  return (
    <div className="playlist-container">
      <h1 className="playlist-title">Your Playlist is Ready</h1>

      {/* Spotify Player Embed */}
      <div className="spotify-embed">
        {currentTrack && (
          <iframe
            src={`https://open.spotify.com/embed/track/${currentTrack}`}
            width="100%"
            height="150"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            title="Spotify Player"
            className="spotify-player"
          ></iframe>
        )}
      </div>

      {/* Scrollable Playlist */}
      <div className="playlist-scroll">
        {playlists.map((playlist, index) => (
          <div className="album-card-container" key={index}>
            {/* Non-blurred Album Cover */}
            <div className="album-card">
              <img src={playlist.img} alt={playlist.title} className="album-cover" />
            </div>

            {/* Blurred Background Block */}
            <div className="album-blurred" style={{ backgroundImage: `url(${playlist.img})` }}></div>

            {/* Overlay for Text & Button (Not Blurred) */}
            <div className="album-overlay">
              <h3 className="album-title">{playlist.title}</h3>
              <p className="album-artist">{playlist.artist}</p>

              {/* Play Button */}
              <button className="play-button" onClick={() => handlePlay(playlist.spotifyUri)}>
                <img src={PlayIcon} alt="Play" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="start-over-button" onClick={handleStartOver}>
      Start Over
      </button>
      <button className="add-library-button" onClick={handleStartOver}>
      Add To Library
      </button>
    </div>
  );
};

export default PlaylistPage;
