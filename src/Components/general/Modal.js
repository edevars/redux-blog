import React from "react";
import { connect } from "react-redux";
import * as publicacionesActions from "../../actions/publicacionesActions";
import Spinner from "./Spinner";
import Comment from "../posts/Comment";

const getComments = (publicaciones, id, userId) => {
  const publicacionesPorUsuario = publicaciones.filter(
    publicacion => publicacion.userId === userId
  );

  const { posts } = publicacionesPorUsuario[0];

  const publicacionEspecifica = posts.filter(
    postByUser => postByUser.id === id
  );

  return publicacionEspecifica[0].comentarios;
};

const Modal = props => {
  const { loading, publicaciones } = props.publicacionesReducer;
  const { id, userId } = props;
  const comments = getComments(publicaciones, id, userId);
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        {loading ? (
          <div className="box">
            <div className="media">
              <Spinner></Spinner>
            </div>
          </div>
        ) : (
          <>
            <header className="modal-card-head">
              <p className="modal-card-title">Comentarios</p>
              <button
                className="delete"
                aria-label="close"
                onClick={() => props.handleOpen(props.id, props.userId)}
              ></button>
            </header>
            <section className="modal-card-body">
              {comments.map(({ id, email, name, body }) => (
                <Comment key={id} email={email} name={name} body={body} />
              ))}
            </section>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ publicacionesReducer }) => {
  return {
    publicacionesReducer
  };
};

export default connect(
  mapStateToProps,
  publicacionesActions
)(Modal);
