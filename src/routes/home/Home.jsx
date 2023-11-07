import React, { useEffect } from "react";
import "./Home.scss";
import { homeNavArrow } from "../../assets/img";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomePlaylists } from "../../redux/slicer/homeSlicer";
import { Link } from "react-router-dom";
import Mixes from "./homePlaylists/Mixes";
import MadeForYou from "./homePlaylists/MadeForYou";
import RecentlyPlayed from "./homePlaylists/RecentlyPlayed";
import BackIn from "./homePlaylists/BackIn";

const Home = () => {
  const dispatch = useDispatch();
  const homePlaylistData = useSelector(
    (state) => state.home_playlist.data.playlists?.items
  );

  useEffect(() => {
    dispatch(fetchHomePlaylists());
  }, []);
  return (
    <div className="home">
      <div className="container">
        <div className="home__wrapper">
          <div>
            <div className="home__swipes">
              <img src={homeNavArrow} alt="" />
              <img src={homeNavArrow} alt="" />
            </div>
          </div>
          <div className="home__playlists">
            <h2>Good afternoon</h2>
            <div className="home__playlist_items">
              {homePlaylistData?.slice(0, 6).map((item) => (
                <Link
                  key={item.id}
                  to={`/playlist/${item.id}`}
                  className="home__playlist_item"
                >
                  <img src={item.images[0].url} alt="" />
                  <div className="playlist__name">
                    <h2>{item.name}</h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Mixes />
      <MadeForYou />
      <RecentlyPlayed />
      <BackIn />
    </div>
  );
};

export default Home;
