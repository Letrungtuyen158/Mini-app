import { compose } from '@reduxjs/toolkit';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { reducers } from './Store.redux';
import rootSaga from './Store.saga';

const sagaMiddleware = createSagaMiddleware();
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const middleware: any = [
    sagaMiddleware
    //  DEBUG && logger
].filter(Boolean);
function configureStore() {
    const finalReducers = reducers;
    // If rehydration is on use persistReducer otherwise default combineReducers

    const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

    const store = createStore(finalReducers, composeEnhancers(applyMiddleware(...middleware)));

    sagaMiddleware.run(rootSaga);
    return store;
}
export const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
