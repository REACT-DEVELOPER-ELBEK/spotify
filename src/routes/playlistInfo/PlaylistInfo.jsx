import React, { useEffect, useState } from "react";
import "./PlaylistInfo.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiOutlineHeart,
  AiFillHeart,
  AiFillCaretRight,
} from "react-icons/ai";
import { TfiDownload } from "react-icons/tfi";
import { BsThreeDots } from "react-icons/bs";
import { BiSearch, BiTime } from "react-icons/bi";

const ACCESS_TOKEN = JSON.stringify(localStorage.getItem("access_token"));

const PlaylistInfo = () => {
  const [isPause, setIsPause] = useState(true);
  const [isLiked, setIsLiked] = useState(true);
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
    return `02:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
  }
  function getTimePlaylist(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  return (
    <div className="playlist">
      <div className="container">
        <div className="playlist__wrapper">
          <div className="playlist__hero">
            {playlist[0] &&
              playlist.map((item) => (
                <React.Fragment key={item.id}>
                  <div className="playlist__img">
                    <LazyLoadImage effect="blur" src={item.images[0].url} alt="" />
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
                        {convertMsToTime(
                          item?.tracks.items[(0, 1)].track.duration_ms
                        )}
                      </h3>
                    </div>
                  </div>
                </React.Fragment>
              ))}
          </div>
          <div className="playlist__actions">
            <div className="playlist__actions__left">
              <p>
                {isPause ? (
                  <AiFillPlayCircle onClick={() => setIsPause(false)} />
                ) : (
                  <AiFillPauseCircle onClick={() => setIsPause(true)} />
                )}
              </p>
              <p>
                {isLiked ? (
                  <AiOutlineHeart onClick={() => setIsLiked(false)} />
                ) : (
                  <AiFillHeart onClick={() => setIsLiked(true)} />
                )}
              </p>
              <p>
                <TfiDownload />
              </p>
              <p>
                <BsThreeDots />
              </p>
            </div>
            <div className="playlist__actions__right">
              <p>
                <BiSearch />
              </p>
              <p>
                Custom order{" "}
                <span>
                  <AiFillCaretRight className="order__triangle" />
                </span>
              </p>
            </div>
          </div>
          <div className="playlist__musics">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>title</th>
                  <th>album</th>
                  <th>
                    <BiTime />
                  </th>
                </tr>
              </thead>
              <tbody>
                {playlist[0]?.tracks.items.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <img src={item.track.album.images[0].url} alt="" />{" "}
                      <div className="playlist__item">
                        <h5>{item.track.name}</h5>
                        <h6>{item.track.album.artists[0].name}</h6>
                      </div>
                    </td>
                    <td>{item.track.album.name}</td>
                    <td>{getTimePlaylist(item.track.duration_ms)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistInfo;
