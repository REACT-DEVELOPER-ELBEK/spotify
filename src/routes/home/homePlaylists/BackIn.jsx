import React, { useEffect } from "react";
import "../homePlaylists.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBackIn } from "../../../redux/slicer/jumpBack";

const BackIn = () => {
  const dispatch = useDispatch();
  const jumpBackIn = useSelector(
    (state) => state.jump_back_in.data.playlists?.items
  );
  useEffect(() => {
    dispatch(fetchBackIn());
  }, []);
  return (
    <div className="home__playlists">
      <div className="container">
        <div className="home__playlists__wrapper">
          <div className="playlists__title">
            <h1>Jump back in</h1>
            <Link>see all</Link>
          </div>
          <div className="playlist__parent">
              {jumpBackIn?.slice(10, 14).map((item) => (
                <Link to={`/playlist/${item.id}`} className="playlist__item" key={item.id}>
                    <img src={item.images[0].url} alt="" />
                    <h2>{item.name}</h2>
                    <h3>{item.description.slice(0, 38)}</h3>
                </Link>
              ))}
            </div>
        </div>
      </div>
    </div>
  )
};

export default BackIn;
