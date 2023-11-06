import React, { useEffect, useState } from "react";
import "./PlaylistInfo.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

const ACCESS_TOKEN = JSON.stringify(localStorage.getItem("access_token"));

const PlaylistInfo = () => {
  const params = useParams();
  let playlistId = params.id;
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    axios(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      headers: {
        Authorization: ACCESS_TOKEN,
      },
    })
      .then((response) => setPlaylist([response.data]))
      .catch((error) => console.log(error));
  }, []);
  console.log(playlist);

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;
    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds
    )}`;
  }

//   let a = 0;
//   function getDuration() {
//     for (let i = 0; i < playlist[0].tracks.items.length; i++) {
//       console.log(a += playlist[0]?.tracks.items[i].track.duration_ms);
//     }
//   }
//   getDuration();

  return (
    <div className="playlist">
      <div className="container">
        <div className="playlist__wrapper">
          <div className="playlist__hero">
            {playlist[0] &&
              playlist.map((item) => (
                <React.Fragment key={item.id}>
                  <div className="playlist__img">
                    <img src={item.images[0].url} alt="" />
                  </div>
                  <div className="playlist__description">
                    <h3>PUBLIC PLAYLIST</h3>
                    <h1>{item.name}</h1>
                    <div className="playlist__artists">
                      <p>{item.tracks.items[0].track.album.artists[0].name},</p>
                      <p>{item.tracks.items[1].track.album.artists[0].name},</p>
                      <p>{item.tracks.items[2].track.album.artists[0].name}</p>
                      <span>and more</span>
                    </div>
                    <div className="playlist__info">
                      <h5>
                        Made for <span>User</span>
                      </h5>
                      <p>&#8226;</p>
                      <h3>
                        {item.tracks.items.length} songs,{" "}
                        {convertMsToTime(item?.tracks.items[0].track.duration_ms)}
                      </h3>
                    </div>
                  </div>
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistInfo;
