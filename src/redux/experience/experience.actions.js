import store from "../store";
const { dispatch } = store;

export const setExperience = (data) => {
    dispatch({
        type: 'SET_EXPERIENCE',
        payload: data,
    })
}