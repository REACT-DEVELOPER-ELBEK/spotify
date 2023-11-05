import {configureStore} from '@reduxjs/toolkit'
import slicer from './slicer/slicer'
import homeSlicer from './slicer/homeSlicer'
import yourTopMixesSlicer from './slicer/yourTopMixesSlicer'

export const store = configureStore({
    reducer:{
        side_bar: slicer,
        home_playlist: homeSlicer,
        home_your_top_mixes: yourTopMixesSlicer
    }
})