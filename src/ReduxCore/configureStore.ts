import {applyMiddleware, configureStore, createStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {
    persistStore, //
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import {rootReducer} from './rootReducer';
import {IReduxStore} from './types/IReduxStore';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Enable Redux DevTools
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureAppStore(preloadedState?: IReduxStore) {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer];
    const composedEnhancers = composeEnhancers(...enhancers);

    const store = createStore(persistedReducer, preloadedState, composedEnhancers);

    const persistor = persistStore(store);

    return {store, persistor};
}
