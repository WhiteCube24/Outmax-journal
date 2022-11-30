import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import reducer from '../reducers';
import coworkerPopup from '../reducers/coworkerPopup';
import coworkers from '../reducers/coworkers';
// import reducer from '../reducers/index'

// const store = configureStore({reducer, devTools: process.env.NODE_ENV !== 'production'
// // })
let reducer = combineReducers({coworkers: coworkers, coworkerPopup: coworkerPopup})

const store = configureStore({reducer},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;