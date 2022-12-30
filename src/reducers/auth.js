const inititalState = {
    isAuth: false
}

const auth = (state = inititalState, action) => {
    switch(action.type) {
        case 'AUTH' :
            return {
                isAuth: true
            }
        case 'NOT_AUTH':
            return {
                isAuth: false
            }
        default: return state
    }
}

export default auth