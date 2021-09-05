import { createStore, compose, applyMiddleware } from "redux";
import {rootReducers} from './reducers/rootReducers';
import thunk from 'redux-thunk';
import { getStateLocalStorage, setStateLocalStorage } from "./utils/localStorage";


//localstorage
const localStorageState = getStateLocalStorage();

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    rootReducers,
    localStorageState,
    composeEnhancers(
        applyMiddleware( thunk )
    )
)

store.subscribe(() => {
    setStateLocalStorage({
        tweets: store.getState().tweets
    });
})