import axios from "axios";
import {
  TRAER_TODOS,
  TRAER_POSTS_POR_USUARIO,
  CARGANDO,
  ERROR
} from "../types/publicacionesTypes";

import * as usuarioTypes from "../types/usuariosTypes";

const { TRAER_TODOS: TRAER_TODOS_USUARIOS } = usuarioTypes;

export const getAllPosts = () => async dispatch => {
  dispatch({
    type: CARGANDO
  });

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );

    dispatch({
      type: TRAER_TODOS,
      payload: response.data
    });
  } catch (error) {
    console.error("Error", error.message);
    dispatch({
      type: ERROR,
      payload: error.message
    });
  }
};

export const getPostsByUser = id => async (dispatch, getState) => {
  const { publicaciones } = getState().publicacionesReducer;
  const { usuarios } = getState().usuariosReducer;

  try {
    const existsPosts = publicaciones.filter(usuario => usuario.userId === id);

    if (!existsPosts.length) {
      dispatch({
        type: CARGANDO
      });

      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );

      const publicacionesActualizadas = [
        ...publicaciones,
        { userId: id, posts: response.data }
      ];

      const publicacion_key = publicacionesActualizadas.length - 1;

      const usuariosActualizados = [...usuarios];

      usuariosActualizados[id - 1] = {
        ...usuarios[id - 1],
        publicacion_key
      };

      dispatch({
        type: TRAER_TODOS_USUARIOS,
        payload: usuariosActualizados
      });

      dispatch({
        type: TRAER_POSTS_POR_USUARIO,
        payload: publicacionesActualizadas
      });
    }
  } catch (error) {
    console.error("Error", error.message);
    dispatch({
      type: ERROR,
      payload: error.message
    });
  }
};