// import { coworkersPopupClose } from "../actions"

// const inititalState = {
//     coworkers: [],
//     coworkersLoadingStatus: 'empty',
//     popupOpen: false,
//     сoworkerPopup: []
    
// }

// const reducer = (state = inititalState, action) => {
//     switch(action.type) {
//         case 'COWORKERS_FETCHING':
//             return {
//                 ...state,
//                 coworkersLoadingStatus: 'loading'
//             }
//         case 'COWORKERS_FETCHED':
//             return {
//                 ...state,
//                 coworkers: action.payload,
//                 coworkersLoadingStatus: 'empty'
//             }
//         case 'COWORKERS_FETCHING_ERROR':
//             return {
//                 ...state,
//                 coworkersLoadingStatus: 'error'
//             }
//             case 'COWORKERS_POPUP_OPEN':
//                 return {
//                     ...state,
//                     popupOpen: true
//                 }
//             case 'COWORKERS_POPUP_CLOSE':
//                 return{
//                     ...state, 
//                     popupOpen: false
//                 }
//             case 'COWORKERS_ITEM_SELECT':
//                 return {
//                     popupOpen: true,
//                     сoworkerPopup: action.payload
//                 }
//         default: return state

//     }
// }

// export default reducer;


// import { combineReducers } from "redux";
// import coworkerPopup from "./coworkerPopup";
// import coworkers from "./coworkers";

// export default combineReducers({
//     coworkerPopup, 
//     coworkers
// })