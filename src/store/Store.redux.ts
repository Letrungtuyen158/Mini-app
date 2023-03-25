import { combineReducers } from 'redux';
import { BlogReducer } from './Blog';

export const reducers = combineReducers<any, any>({
    blog: BlogReducer
});
