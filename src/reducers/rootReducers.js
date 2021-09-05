import { combineReducers } from 'redux';
import {modalsReducer} from './modalsReducer';
import { tweetReducer } from './tweetReducer';
import { validationReducer } from './validationReducer';

export const rootReducers = combineReducers({
    modals: modalsReducer, 
    validations: validationReducer, 
    tweets: tweetReducer
});