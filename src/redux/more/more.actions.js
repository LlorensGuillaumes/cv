import store from "../store";
const { dispatch } = store;

export const setMore = (data) => {
    dispatch({
        type: 'SET_MORE',
        payload: data,
    })
}