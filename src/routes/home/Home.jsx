import React from 'react'
import './Home.scss'
import { homeNavArrow } from '../../assets/img'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()
    const homePlaylistData = useSelector(state=>console.log(state.home_playlist))
  return (
    <div className="home">
        <div className="container">
            <div className="home__wrapper">
                <div className="home__swipes">
                    <img src={homeNavArrow} alt="" />
                    <img src={homeNavArrow} alt="" />
                </div>
                <div className="home__playlists">
                    <h2>Good afternoon</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home