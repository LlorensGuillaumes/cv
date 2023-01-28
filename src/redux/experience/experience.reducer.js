
const INITAL_STATE = {
    experience: {},
};

export const experienceReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'SET_EXPERIENCE': {
            return { ...state, experience: action.payload }
        }
        default:
            return state;
    }
};