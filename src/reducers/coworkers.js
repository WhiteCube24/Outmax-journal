
const inititalState = {
    coworkers: [],
    coworkersLoadingStatus: 'empty'
    
}

const coworkers = (state = inititalState, action) => {
    switch(action.type) {
        case 'COWORKERS_FETCHING':
            return {
                ...state,
                coworkersLoadingStatus: 'loading'
            }
        case 'COWORKERS_FETCHED':
            return {
                ...state,
                coworkers: action.payload,
                coworkersLoadingStatus: 'empty'
            }
        case 'COWORKERS_FETCHING_ERROR':
            return {
                ...state,
                coworkersLoadingStatus: 'error'
            }
        default: return state

    }
}

export default coworkers;