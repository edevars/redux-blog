import {TRAER_TODOS} from '../types/usuariosTypes'

export const getAll = () => async dispatch => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  let users = await response.json();

  dispatch({
    type: TRAER_TODOS,
    payload: users
  });
};
