export const getAll = () => (dispatch) => {
    dispatch({
        type: 'traer_usuarios',
        payload: [1,2,3]
    })
}