import backendApi from '@/configs/api/backendApi';
import { IUser } from "./../appTypes";
import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { PURGE } from "redux-persist/lib/constants";

export interface UserState {
  account: IUser | null;
  token: string | null;
}

const initialState: UserState = {
  account: null,
  token: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.account = action.payload;
    },
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload
    },
    logout(state) {
      console.log('loggedOut');
      return initialState
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(PURGE, (state) => {
        state = initialState;
      });
  },
});

export const { setUser, setToken, logout } = userSlice.actions
export default userSlice.reducer;
