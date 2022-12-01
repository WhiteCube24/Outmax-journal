const inititalState = {
    burgerIsOpen: false
}

const burger = (state = inititalState, action) => {
    switch(action.type) {
        case 'BURGER_OPEN':
            return {
                burgerIsOpen: true
            }
        case 'BURGER_CLOSE':
            return {
                burgerIsOpen: false
            }
        default: return state
    }
}
export default burger;