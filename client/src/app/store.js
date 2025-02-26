import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"
import createFilter from "redux-persist-transform-filter";
import {persistReducer, persistStore} from "redux-persist"
import { userSlice } from "../features/userSlice.js"; // ✅ Default export properly import

//saveUseronlyFilter
const saveUserOnlyFilter = createFilter("user", ["user.user"])


//persist config
const persistConfig = {
    key: "user",
    storage,
    whitelist: ["user"],
    transforms: [saveUserOnlyFilter]
}

const rootReducer = combineReducers({
    user: userSlice.reducer // ✅ Correct reducer reference
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: true, // ✅ Redux DevTools enabled ache
});

export const persistor = persistStore(store);
