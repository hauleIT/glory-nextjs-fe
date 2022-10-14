import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";
import StorageKeys from "../../constants/storage-keys";

export const UserLogin = createAsyncThunk(
  "auth/login",
  async (data: object) => {
    const dataFromApi = await userApi.login(data);
  

    // save data tp local storage
    localStorage.setItem(StorageKeys.USER, JSON.stringify(dataFromApi.data.user));
    localStorage.setItem(StorageKeys.TOKEN, JSON.stringify(dataFromApi.data.token));

    return dataFromApi.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    current: {},
  },
  reducers: {
    setInfoUser: (state, action)=> action.payload
  },
  extraReducers: (builder) => {
    builder.addCase(UserLogin.fulfilled, (state, action) => {
      state.current = action.payload;
    }),
      builder.addCase(UserLogin.rejected, (action) => {
        console.log(action);
      });
  },
});
export const {setInfoUser} = authSlice.actions
const { reducer } = authSlice;
export default reducer;
