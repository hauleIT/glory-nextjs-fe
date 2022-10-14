import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import authReducer from '../redux/auth/authSlice'

const rootReducer = {
    auth: authReducer
}

const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
 >;

export default store