import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resturant: {
    id: null,
    imgUrl: null,
    name: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    long: null,
    lat: null,
  },
};

export const resturantSlice = createSlice({
  name: "resturantSlice",
  initialState,
  reducers: {
    setResturant: (state, action) => {
      state.resturant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setResturant } = resturantSlice.actions;

export const selectResturant = (state) => state.resturant.resturant;

export default resturantSlice.reducer;
