export const getAll = () => async dispatch => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  let users = await response.json();

  dispatch({
    type: "traer_usuarios",
    payload: users
  });
};
