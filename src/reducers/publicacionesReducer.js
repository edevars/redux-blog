import {
  TRAER_TODOS,
  TRAER_POSTS_POR_USUARIO,
  CARGANDO,
  ERROR
} from "../types/publicacionesTypes";

const INITIAL_STATE = {
  publicaciones: [],
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return { ...state, publicaciones: action.payload, loading: false };

    case TRAER_POSTS_POR_USUARIO:
      return {
        ...state,
        publicaciones: action.payload,
        loading: false
      };

    case CARGANDO:
      return { ...state, loading: true };

    case ERROR:
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
