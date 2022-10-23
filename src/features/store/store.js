import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import {persistReducer,persistStore} from "redux-persist";

const rootReducer = combineReducers({
    user: userReducer
})

const persistConfig = {
    key : "root",
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
    devTools : process.env.NODE_ENV !== "production" 
})

export const persistor = persistStore(store)