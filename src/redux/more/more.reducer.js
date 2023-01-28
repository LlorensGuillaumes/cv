
const INITAL_STATE = {
    more: {},
};

export const moreReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'SET_EXPERIENCE': {
            return { ...state, more: action.payload }
        }
        default:
            return state;
    }
};