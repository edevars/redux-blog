import axios from "axios";
import { TRAER_TODOS } from "../types/publicacionesTypes";

export const getAllPosts = () => async dispatch => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts`
  );
  dispatch({
    type: TRAER_TODOS,
    payload: response.data
  });
};
