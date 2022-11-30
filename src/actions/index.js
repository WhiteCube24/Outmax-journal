export const coworkersFetching = () => {
    return {
        type: 'COWORKERS_FETCHING'
    }
}

export const coworkersFetched = (coworkers) => {
    return {
        type: 'COWORKERS_FETCHED',
        payload: coworkers
    }
}

export const coworkersFetchingError = () => {
    return {
        type: 'COWORKERS_FETCHING_ERROR'
    }
}
export const coworkersPopupOpen = () => {
    return {
        type: 'COWORKERS_POPUP_OPEN',
    }
}
export const coworkersPopupClose = () => {
    return {
        type: 'COWORKERS_POPUP_CLOSE',
    }
}

export const coworkersItemSelect = (coworker) => {
    return {
        type: 'COWORKERS_ITEM_SELECT',
        payload: coworker
       
    }
}