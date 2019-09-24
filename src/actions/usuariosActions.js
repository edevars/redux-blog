import { TRAER_TODOS } from "../types/usuariosTypes";

export const getAll = () => async dispatch => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let users = await response.json();
    dispatch({
      type: TRAER_TODOS,
      payload: users
    });
  } catch (error) {
    console.error(error.message);
  }
};
