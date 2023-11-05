import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMusics } from "../../redux/slicer/slicer";
import { Link } from "react-router-dom";
import './Dashboard.scss'
import { navAddPlaylist, navHome, navLibriary, navLikedSongs, navSearch } from "../../assets/img";

const Dashboard = () => {
  const dispatch = useDispatch();
  const playlistData = useSelector(
    (state) => state.side_bar.data.playlists?.items
  );
  useEffect(() => {
    dispatch(fetchMusics());
  }, []);
  return (
    <>
      <nav>
        <div className="nav__wrapper">
          <div className="nav__links">
            <div className="nav__params">
              <Link to="/">
                <img src={navHome} alt="" /> Home
              </Link>
              <Link to="/search">
                <img src={navSearch} alt="" /> Search
              </Link>
              <Link to="/library">
                <img src={navLibriary} alt="" /> Library
              </Link>
            </div>
            <div className="nav__actions">
              <Link to="/create-playlist">
                <img src={navAddPlaylist} alt="" />
                Create Playlist
              </Link>
              <Link to="/create-playlist">
                <img src={navLikedSongs} alt="" />
                Liked Songs
              </Link>
            </div>
          </div>
          <div className="nav__playlist__names">
            {
                playlistData?.map((playlist, index)=>(
                    <div key={index}>
                        <Link to={playlist.href}>{playlist.name.length>28?playlist.name.slice(0, 29)+"...": playlist.name}</Link>
                    </div>
                ))
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Dashboard;
