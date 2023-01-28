import store from "../store";
const { dispatch } = store;

export const seteEducation = (data) => {
    dispatch({
        type: 'SET_EDUCATION',
        payload: data,
    })
}