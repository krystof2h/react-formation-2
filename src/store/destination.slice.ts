import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { Destination } from "../models/destination.model";
import { getDestinations } from "../services/destination.service";
import { RootState } from "./store";

export interface DestinationState {
  destinations: Destination[];
  loading: boolean;
}

const initialState: DestinationState = {
  destinations: [],
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
        state.destinations = action.payload.destinations;
        state.loading = false;
      })
      .addCase(loadDestinations.rejected, (state) => {
        state.loading = false;
        console.error("Destinations could not be loaded !");
      });
  },
});

export const destinationReducer = destinationSlice.reducer;

export const selectDreamDestinations = (state: RootState) => {
  console.trace();
  return state.destination.destinations.filter((d) => d.isDreamDestination);
};

export const selectDreamDestinationsMemo = createSelector(
  (state: RootState) => state.destination.destinations,
  (destinations) => {
    console.trace();
    return destinations.filter((d) => d.isDreamDestination);
  }
);
