import {configureStore} from '@reduxjs/toolkit'
import slicer from './slicer/slicer'

export const store = configureStore({
    reducer:{
        musics: slicer
    }
})