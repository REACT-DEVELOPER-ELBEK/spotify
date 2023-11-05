import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ACCESS_TOKEN = JSON.stringify(localStorage.getItem("access_token"))

export const fetchYourTopMixes = createAsyncThunk("home/yourTopMixes", async () => {
    let response = await axios("https://api.spotify.com/v1/browse/categories/toplists/playlists",
        {
            headers: {
                "Authorization": ACCESS_TOKEN
            }
        }
    )
    return response.data
})

const yourTopMixesSlicer = createSlice({
    name: "home/yourTopMixes",
    initialState: {
        loading: false,
        data: [],
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchYourTopMixes.pending, (state) => {
            state.loading = true
        }).addCase(fetchYourTopMixes.fulfilled, (state, action) => {
            state.loading = false,
                state.data = action.payload
        }).addCase(fetchYourTopMixes.rejected, (state) => {
            state.error = true
            console.log("@your_top_mixes_api_error")
        })
    }
})

export default yourTopMixesSlicer.reducer