const inititalState = {
    popupOpen: false,
    сoworkerItem: []
    
}

const coworkerPopup = (state = inititalState, action) => {
    switch(action.type) {
        case 'COWORKERS_POPUP_OPEN':
            // const openCoworker = state.coworkers.filter(item => item.id === action.payload)
            return {
                ...state,
                popupOpen: true
            }
        // case 'COWORKERS_POPUP_CLOSE':
        //     return{
        //         ...state, 
        //         popupOpen: false
        //     }
        case 'COWORKERS_ITEM_SELECT':
            return {
                ...state,
                // popupOpen: true,
                сoworkerItem: action.payload
               
            }
        default: return state

    }
}

export default coworkerPopup;