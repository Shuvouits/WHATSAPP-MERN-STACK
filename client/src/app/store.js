import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import createFilter from "redux-persist-transform-filter";
import storage from "redux-persist/lib/storage";
//slices
import userSlice from "../features/userSlice";

//Reducer : Reducer is a function that's work state & action . Always return new state
//ReduxPersist : Automatics save state data.
//createFilter: it's define which part will saved to the PersistStorage
//whitelist: It's identified the executable part of Persist

//saveUserOnlyFilter
const saveUserOnlyFilter = createFilter("user", ["user"]);  //Only store user object

//persist config
const persistConfig = {
  key: "user",
  storage,
  whitelist: ["user"],
  transforms: [saveUserOnlyFilter],
};

const rootReducer = combineReducers({
  user: userSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), // Manage state smoothly
  devTools: true,
});

export const persistor = persistStore(store);