import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ACCESS_TOKEN = JSON.stringify(localStorage.getItem("access_token"))

export const fetchMadeForYou = createAsyncThunk("home/yourTopMixes", async () => {
    let response = await axios("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists",
        {
            headers: {
                "Authorization": ACCESS_TOKEN
            }
        }
    )
    return response.data
})

const madeForYouSlicer = createSlice({
    name: "home/madeForYou",
    initialState: {
        loading: false,
        data: [],
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMadeForYou.pending, (state) => {
            state.loading = true
        }).addCase(fetchMadeForYou.fulfilled, (state, action) => {
            state.loading = false,
                state.data = action.payload
        }).addCase(fetchMadeForYou.rejected, (state) => {
            state.error = true
            console.log("@made_for_you_api_error")
        })
    }
})

export default madeForYouSlicer.reducer