import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Destination } from "../models/destination.model";
import { getDestinations } from "../services/destination.service";

export interface DestinationState {
  destination: Destination[];
  loading: boolean;
}

const initialState: DestinationState = {
  destination: [],
  loading: false,
};

export const loadDestinations = createAsyncThunk(
  "destination/loadDestination",
  async () => {
    const destinations = await getDestinations();
    return { destinations };
  }
);
const destinationSlice = createSlice({
  initialState,
  name: "destination",
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadDestinations.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadDestinations.fulfilled, (state, action) => {
        state.destination = action.payload.destinations;
        state.loading = false;
      })
      .addCase(loadDestinations.rejected, (state) => {
        state.loading = false;
        console.error("Destinations could not be loaded !");
      });
  },
});

export const destinationReducer = destinationSlice.reducer;
