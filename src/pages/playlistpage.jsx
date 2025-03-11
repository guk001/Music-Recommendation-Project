import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./playlistpage.css";
import PlayIcon from "./album/play_button.png";

const PlaylistPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/"); 
  };
  const [currentTrack, setCurrentTrack] = useState(null);
  const [trackData, setTrackData] = useState({}); 
  const playlists = [
    { spotifyUri: "7AKwWqnoMmvCqBQtcdIECG" },
    { spotifyUri: "2plbrEY59IikOBgBGLjaoe" },
    { spotifyUri: "5vNRhkKd0yEAg8suGBpjeY" },
    { spotifyUri: "6dOtVTDdiauQNBQEDOtlAB" },
    { spotifyUri: "2p8IUWQDrpjuFltbdgLOag" },
    { spotifyUri: "3zsRP8rH1kaIAo9fmiP4El" },
    { spotifyUri: "3NyX0UgDNvhP2zyeBaAbpu" },
    { spotifyUri: "22TTatdk4eLlsQ2mXKRozH" },
  ];

  useEffect(() => {
    const fetchTrackDetails = async () => {
      const token = "BQDooMdIhAleBN993jDKzDODRWIj4dB_Fn45ql9aHi5h_qK0PinSNnTioDjQaIT_Ac-S3NAudlY0FGSouEx_Id0SlzeRkFWLN69ImJBVCehm2spYYdc0zCT7DA7fpCpEuAdjPcNG__k"; // Replace with valid Spotify API token
      let dataMap = {};

      for (let playlist of playlists) {
        try {
          const response = await fetch(`https://api.spotify.com/v1/tracks/${playlist.spotifyUri}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          const data = await response.json();
          if (data && data.name && data.artists.length > 0) {
            dataMap[playlist.spotifyUri] = {
              title: data.name,
              artist: data.artists.map(artist => artist.name).join(", "), 
              image: data.album.images.length > 0 ? data.album.images[0].url : "default_image_url.jpg",
            };
          }
        } catch (error) {
          console.error("Error fetching track details:", error);
        }
      }
      setTrackData(dataMap);
    };

    fetchTrackDetails();
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

      <div className="playlist-scroll">
        {playlists.map((playlist, index) => {
          const trackInfo = trackData[playlist.spotifyUri] || {};
          return (
            <div className="album-card-container" key={index}>
              <div className="album-card">
                <img src={trackInfo.image || "default_image_url.jpg"} alt={trackInfo.title || "Track"} className="album-cover" />
              </div>

              <div className="album-blurred" style={{ backgroundImage: `url(${trackInfo.image || "default_image_url.jpg"})` }}></div>

              <div className="album-overlay">
                <h3 className="album-title">{trackInfo.title || "Loading..."}</h3>
                <p className="album-artist">{trackInfo.artist || "Loading..."}</p>

                <button className="play-button" onClick={() => handlePlay(playlist.spotifyUri)}>
                  <img src={PlayIcon} alt="Play" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button className="start-over-button" onClick={goBack}>Start Over</button>
      <button className="add-library-button">Add To Library</button>
    </div>
  );
};

export default PlaylistPage;
