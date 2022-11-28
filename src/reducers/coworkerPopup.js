import { coworkersPopupClose } from "../actions"

const inititalState = {
    popupOpen: false,
    сoworkerPopup: []
    
}

const coworkerPopup = (state = inititalState, action) => {
    switch(action.type) {
        case 'COWORKERS_POPUP_OPEN':
            // const openCoworker = state.coworkers.filter(item => item.id === action.payload)
            return {
                ...state,
                popupOpen: true
            }
        case 'COWORKERS_POPUP_CLOSE':
            return{
                ...state, 
                popupOpen: false
            }
        case 'COWORKERS_ITEM_SELECT':
            return {
                popupOpen: true,
                сoworkerPopup: action.payload
            }
        default: return state

    }
}

export default coworkerPopup;