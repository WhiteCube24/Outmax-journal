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