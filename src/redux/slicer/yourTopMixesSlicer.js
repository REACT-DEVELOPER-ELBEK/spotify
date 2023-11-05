import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchYourTopMixes = createAsyncThunk("home/yourTopMixes", async()=>{
    axios("https://api.spotify.com/v1/browse/categories/toplists/playlists", 
    {
        headers: {
            "Authorization": ACCESS_TOKEN
        }
    }
    )
})