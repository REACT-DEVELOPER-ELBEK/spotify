import React, { useEffect } from "react";
import "../homePlaylists.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMadeForYou } from "../../../redux/slicer/madeForYouSlicer";

const MadeForYou = () => {
  const dispatch = useDispatch();
  const madeForYou = useSelector(
    (state) => state.made_for_you.data.playlists?.items
  );
  useEffect(() => {
    dispatch(fetchMadeForYou());
  }, []);
  return (
    <div>
      <div className="home__playlists">
        <div className="container">
          <div className="home__playlists__wrapper">
            <div className="playlists__title">
              <h1>Made for you</h1>
              <Link>see all</Link>
            </div>
            <div className="playlist__parent">
              {madeForYou?.slice(8, 12).map((item) => (
                <Link
                  to={`/playlist/${item.id}`}
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
    </div>
  );
};

export default MadeForYou;
