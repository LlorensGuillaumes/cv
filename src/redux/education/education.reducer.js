
const INITAL_STATE = {
    education: {},
};

export const educationReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'SET_EDUCATION': {
            return { ...state, education: action.payload }
        }
        default:
            return state;
    }
};