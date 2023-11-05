import React, { useEffect } from "react";
import "../homePlaylists.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRecentlyPlayed } from "../../../redux/slicer/recentlyPlayedSlicer";

const RecentlyPlayed = () => {
  const dispatch = useDispatch();
  const recentlyPlayed = useSelector(
    (state) => state.recently_played.data.playlists?.items
  );
  useEffect(() => {
    dispatch(fetchRecentlyPlayed());
  }, []);
  return (
    <div className="home__playlists">
      <div className="container">
        <div className="home__playlists__wrapper">
          <div className="playlists__title">
            <h1>Recently played</h1>
            <Link>see all</Link>
          </div>
          <div className="playlist__parent">
            {recentlyPlayed?.slice(3, 7).map((item) => (
              <Link
                to={`https://api.spotify.com/v1/playlists/${item.id}`}
                className="playlist__item"
                key={item.id}
              >
                <img src={item.images[0].url} alt="" />
                <h2>{item.name}</h2>
                <h3>{item.description.slice(0, 38)}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyPlayed;
