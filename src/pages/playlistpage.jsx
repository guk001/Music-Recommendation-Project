import React, { useState, useEffect } from "react";
import "./playlistpage.css";
import PlayIcon from "./album/play_button.png";

const PlaylistPage = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [trackImages, setTrackImages] = useState({});

  const playlists = [
    { title: "Luther", artist: "Kendrick Lamar and SZA", spotifyUri: "45J4avUb9Ni0bnETYaYFVJ" },
    { title: "Die With A Smile", artist: "Lady Gaga and Bruno Mars", spotifyUri: "2plbrEY59IikOBgBGLjaoe" },
    { title: "APT.", artist: "Bruno Mars and Rosé", spotifyUri: "5vNRhkKd0yEAg8suGBpjeY" },
    { title: "BIRDS OF A FEATHER", artist: "Billie Eilish", spotifyUri: "6dOtVTDdiauQNBQEDOtlAB" },
    { title: "After Hours", artist: "The Weeknd", spotifyUri: "2p8IUWQDrpjuFltbdgLOag" },
    { title: "Angels", artist: "The XX", spotifyUri: "3zsRP8rH1kaIAo9fmiP4El" },
    { title: "If You Wait", artist: "London Grammar", spotifyUri: "3NyX0UgDNvhP2zyeBaAbpu" },
    { title: "Zebulon", artist: "Kungs", spotifyUri: "22TTatdk4eLlsQ2mXKRozH" },
  ];

  useEffect(() => {
    const fetchTrackImages = async () => {
      const token = "BQCYlIOqIKeN7NrYfGjzNnFBJM5O-8B17SzNxyVoGvbxBh7KLFxrO-fBWuUeMYneFBBb6LnndflOMlFdVms0vr5iuruDLcvVD4db2FlhfCfEa9itnuGE0-DbQbVgnMCUrDadRIKe0Ik"; // Replace with your valid Spotify API token
      let images = {};
      
      for (let playlist of playlists) {
        try {
          const response = await fetch(`https://api.spotify.com/v1/tracks/${playlist.spotifyUri}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();
          if (data.album && data.album.images.length > 0) {
            images[playlist.spotifyUri] = data.album.images[0].url;
          }
        } catch (error) {
          console.error("Error fetching track image:", error);
        }
      }
      setTrackImages(images);
    };
    
    fetchTrackImages();
  }, []);

  const handlePlay = (spotifyUri) => {
    if (!spotifyUri) {
      console.error("Invalid Spotify URI:", spotifyUri);
      return;
    }
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
              <img src={trackImages[playlist.spotifyUri] || "default_image_url.jpg"} alt={playlist.title} className="album-cover" />
            </div>

            {/* Blurred Background Block */}
            <div className="album-blurred" style={{ backgroundImage: `url(${trackImages[playlist.spotifyUri] || "default_image_url.jpg"})` }}></div>

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
      <button className="start-over-button" onClick={handleStartOver}>Start Over</button>
      <button className="add-library-button">Add To Library</button>
    </div>
  );
};

export default PlaylistPage;
