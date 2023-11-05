import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const ACCESS_TOKEN = JSON.stringify(localStorage.getItem("access_token"))

export const fetchHomePlaylists = createAsyncThunk("home/playlists", async () => {
    let response = await axios("https://api.spotify.com/v1/browse/categories/toplists/playlists",
        {
            headers: {
                "Authorization": ACCESS_TOKEN
            }
        }
    )
    return response.data
})

const fetchHomePlaylistsSlicer = createSlice({
    name: "home/playlists",
    initialState: {
        loading: false,
        data: [],
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHomePlaylists.pending, (state) => {
            state.loading = true
        }).addCase(fetchHomePlaylists.fulfilled, (state, action) => {
            state.loading = false,
                state.data = action.payload
        }).addCase(fetchHomePlaylists.rejected, (state) => {
            state.error = true
            console.log("@home_page_playlists_api_error")
        })
    }
})

export default fetchHomePlaylistsSlicer.reducer