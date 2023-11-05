import React, { useEffect } from "react";
import "../homePlaylists.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchYourTopMixes } from "../../../redux/slicer/yourTopMixesSlicer";
import { Link } from "react-router-dom";

const Mixes = () => {
  const dispatch = useDispatch();
  const topMixes = useSelector((state) =>state.home_your_top_mixes.data.playlists?.items);
console.log(topMixes);
  useEffect(() => {
    dispatch(fetchYourTopMixes());
  }, []);
  return (
    <div className="home__playlists">
      <div className="container">
        <div className="home__playlists__wrapper">
          <div className="playlists__title">
            <h1>Your top mixes</h1>
            <Link>see all</Link>
          </div>
          <div className="playlist__parent">
              {topMixes?.slice(3, 7).map((item) => (
                <Link to={`https://api.spotify.com/v1/playlists/${item.id}`} className="playlist__item" key={item.id}>
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

export default Mixes;
