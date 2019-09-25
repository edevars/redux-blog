import axios from "axios";
import { TRAER_TODOS, CARGANDO, ERROR } from "../types/usuariosTypes";

export const getAllUsers = () => async dispatch => {
  dispatch({
    type: CARGANDO
  });
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    dispatch({
      type: TRAER_TODOS,
      payload: response.data
    });
  } catch (error) {
    console.error("Error: ", error.message);
    dispatch({
      type: ERROR,
      payload: error.message
    });
  }
};
