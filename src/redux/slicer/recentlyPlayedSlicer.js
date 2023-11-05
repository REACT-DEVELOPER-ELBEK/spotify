import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ACCESS_TOKEN = JSON.stringify(localStorage.getItem("access_token"))

export const fetchRecentlyPlayed = createAsyncThunk("home/recentlyPlayed", async () => {
    let response = await axios("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists",
        {
            headers: {
                "Authorization": ACCESS_TOKEN
            }
        }
    )
    return response.data
})

const recentlyPlayedSlicer = createSlice({
    name: "home/recentlyPlayed",
    initialState: {
        loading: false,
        data: [],
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRecentlyPlayed.pending, (state) => {
            state.loading = true
        }).addCase(fetchRecentlyPlayed.fulfilled, (state, action) => {
            state.loading = false,
                state.data = action.payload
        }).addCase(fetchRecentlyPlayed.rejected, (state) => {
            state.error = true
            console.log("@recently_played_api_error")
        })
    }
})

export default recentlyPlayedSlicer.reducer