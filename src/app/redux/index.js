import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist';
import storage from "redux-persist/lib/storage";

import AuthReducer from './slices/auth.slice'
// import AdminsReducer from './slice/admins.slice'
import BookingReducer from './slices/booking.slice'
const persistConfig = {
    key: 'root',
    storage: storage,

};

const rootReducer = combineReducers({AuthReducer:AuthReducer,BookingReducer:BookingReducer})
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);
