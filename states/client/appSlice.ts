import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  hello: string;
}

const initialState: AppState = {
  hello: "Hello, Redux!",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setHello: (state, action: PayloadAction<string>) => {
      state.hello = action.payload;
    },
  },
});

export const { setHello } = appSlice.actions;

export default appSlice.reducer;
