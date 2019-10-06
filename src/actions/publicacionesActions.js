import axios from "axios";
import {
  TRAER_TODOS,
  TRAER_POSTS_POR_USUARIO,
  CARGANDO,
  ERROR,
  ABRIR_CERRAR_MODAL,
  AGREGAR_COMENTARIOS
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

      const publicacionesNuevas = response.data.map(publicacion => ({
        ...publicacion,
        comentarios: [],
        abierto: false
      }));

      const publicacionesActualizadas = [
        ...publicaciones,
        { userId: id, posts: publicacionesNuevas }
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

export const obtenerComentarios = (id, userId) => async (
  dispatch,
  getState
) => {
  const { publicaciones } = getState().publicacionesReducer;

  const publicacionesPorUsuario = publicaciones.filter(
    publicacion => publicacion.userId === userId
  );

  const { posts } = publicacionesPorUsuario[0];

  const publicacionEspecifica = posts.filter(
    postByUser => postByUser.id === id
  );

  publicacionEspecifica[0].abierto = !publicacionEspecifica[0].abierto;

  dispatch({
    type: ABRIR_CERRAR_MODAL,
    payload: publicaciones
  });

  if (!publicacionEspecifica[0].comentarios.length) {
    
    dispatch({
      type: CARGANDO
    });

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );

      publicacionEspecifica[0].comentarios = response.data;

      dispatch({
        type: AGREGAR_COMENTARIOS,
        payload: publicaciones
      });
    } catch (error) {
      console.error("Error", error.message);
      dispatch({
        type: ERROR,
        payload: error.message
      });
    }
  }
};
