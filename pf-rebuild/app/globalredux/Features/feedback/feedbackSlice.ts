"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface FeedbackState {
    posts: []
}

const initialState: FeedbackState = {
    posts: []
}

export const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        getFeedback: (state, action) => {
            state.posts = action.payload
        }
    }
})

export const { getFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;