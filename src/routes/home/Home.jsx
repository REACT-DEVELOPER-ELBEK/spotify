import React, { useEffect } from 'react'
import './Home.scss'
import { homeNavArrow } from '../../assets/img'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHomePlaylists } from '../../redux/slicer/homeSlicer'

const Home = () => {
    const dispatch = useDispatch()
    const homePlaylistDataSelector = useSelector(state=>(state.home_playlist.data.playlists?.items))

    useEffect(()=>{
        dispatch(fetchHomePlaylists())
    }, [])
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