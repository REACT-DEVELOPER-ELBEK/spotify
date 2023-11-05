import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ACCESS_TOKEN = JSON.stringify(localStorage.getItem("access_token"))

export const fetchBackIn = createAsyncThunk("home/backIn", async () => {
    let response = await axios("https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists",
        {
            headers: {
                "Authorization": ACCESS_TOKEN
            }
        }
    )
    return response.data
})

const backIn = createSlice({
    name: "home/backIn",
    initialState: {
        loading: false,
        data: [],
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBackIn.pending, (state) => {
            state.loading = true
        }).addCase(fetchBackIn.fulfilled, (state, action) => {
            state.loading = false,
                state.data = action.payload
        }).addCase(fetchBackIn.rejected, (state) => {
            state.error = true
            console.log("@jump_back_in_api_error")
        })
    }
})

export default backIn.reducer