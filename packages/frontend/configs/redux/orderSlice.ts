import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderState, orderStep } from "types";

export const initialState: OrderState = {
  step: "pickup",
};

export const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    updateStep(state, action: PayloadAction<{ step: orderStep }>) {
      console.log("redux", action.payload.step);
      state.step = action.payload.step;
    },
  },
  extraReducers: {},
});

const { actions, reducer } = orderSlice;
export const { updateStep } = actions;
export default reducer;
