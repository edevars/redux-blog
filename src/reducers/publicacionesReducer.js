import { TRAER_TODOS } from "../types/publicacionesTypes";

const INITIAL_STATE = {
  publicaciones: [],
  loading: false,
  error: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRAER_TODOS:
      return { ...state, publicaciones: action.payload };

    default:
      return state;
  }
};
