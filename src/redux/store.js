import {configureStore} from '@reduxjs/toolkit'
import slicer from './slicer/slicer'
import homeSlicer from './slicer/homeSlicer'

export const store = configureStore({
    reducer:{
        side_bar: slicer,
        home_playlist: homeSlicer
    }
})