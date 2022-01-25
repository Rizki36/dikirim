import { UserType } from "./../appTypes";
import {
  AsyncThunkOptions,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import backendApi from "../api/backendApi";
import { PURGE } from "redux-persist/lib/constants";

export interface UserState {
  user: UserType | null;
  isFetching: boolean;
  isError: boolean;
}

const initialState: UserState = {
  user: null,
  isFetching: false,
  isError: false,
};

export const userLogin = createAsyncThunk(
  "user/login",
  async (
    arg: { username: string; password: string },
    { rejectWithValue, fulfillWithValue }
  ): Promise<any> => {
    try {
      const { username, password } = arg;
      const response = await backendApi.post("/login", {
        email: username,
        password: password,
      });

      const {
        data: {
          data: { id, email, avatar },
        },
      } = await backendApi.get("/users/2");

      return fulfillWithValue<UserType>({
        id,
        email,
        img: avatar,
      });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.isError = false;
        state.isFetching = true;
      })
      // TODO : change any type
      .addCase(userLogin.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isError = false;
        state.isFetching = false;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isError = true;
        state.isFetching = false;
      })
      .addCase(PURGE, (state) => {
        state = initialState;
      });
  },
});

export default userSlice.reducer;
