import {configureStore} from '@reduxjs/toolkit'
import slicer from './slicer/slicer'
import homeSlicer from './slicer/homeSlicer'
import yourTopMixesSlicer from './slicer/yourTopMixesSlicer'
import madeForYouSlicer from './slicer/madeForYouSlicer'
import recentlyPlayedSlicer from './slicer/recentlyPlayedSlicer'
import jumpBack from './slicer/jumpBack'

export const store = configureStore({
    reducer:{
        side_bar: slicer,
        home_playlist: homeSlicer,
        home_your_top_mixes: yourTopMixesSlicer,
        made_for_you: madeForYouSlicer,
        recently_played: recentlyPlayedSlicer,
        jump_back_in: jumpBack
    }
})