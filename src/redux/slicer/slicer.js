import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const ACCESS_TOKEN = JSON.stringify(localStorage.getItem("access_token"))

export const fetchMusics = createAsyncThunk("musics", async () => {
    const response = await axios("https://api.spotify.com/v1/browse/featured-playlists",
        {
            headers: {
                "Authorization": ACCESS_TOKEN
            }
        }
    )
    return response.data
})
const musicSlicer = createSlice({
    name: "musics",
    initialState: {
        loading: true,
        data: [],
        error: false
    },

    extraReducers: (builder) => {
        builder.addCase(fetchMusics.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchMusics.fulfilled, (state, action) => {
            state.loading = false,
                state.error = false
            state.data = action.payload
        })
        builder.addCase(fetchMusics.rejected, (state) => {
            state.error = true,
                console.log("@api_error")
        })
    }
})

export default musicSlicer.reducer