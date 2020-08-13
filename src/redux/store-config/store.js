import { createStore } from 'redux'
import { reducer } from '../reducers/ArticleReducers'

const store = createStore(
    reducer
);


export { store } 