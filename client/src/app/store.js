import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice.js"; // ✅ Default export properly import

const rootReducer = combineReducers({
    user: userReducer // ✅ Correct reducer reference
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true, // ✅ Redux DevTools enabled ache
});
