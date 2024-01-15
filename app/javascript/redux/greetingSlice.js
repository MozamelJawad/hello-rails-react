import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  value: "",
  status: "idle",
};

export const fetchGreetings = createAsyncThunk(
  "greetings/fetchGreetings",
  async () => {
    try {
      const response = await axios(
        "http://127.0.0.1:3000/api/greetings/random"
      );
      if (!response) {
        throw new Error("Cannot fetch quote");
      }
      const data = response.data;

      return data.greeting;
    } catch (error) {
      throw new Error("Cannot fetch quote");
    }
  }
);

const greetingSlice = createSlice({
  name: "greetings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreetings.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(fetchGreetings.fulfilled, (state, action) => ({
        ...state,
        status: "Success",
        value: action.payload,
      }))
      .addCase(fetchGreetings.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }));
  },
});

export default greetingSlice.reducer;
