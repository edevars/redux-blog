import React, { Component } from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import * as publicacionesActions from "../../actions/publicacionesActions";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import Post from "./Post";

class Posts extends Component {
  async componentDidMount() {
    if (!this.props.usuariosReducer.usuarios.length) {
      await this.props.getAllUsers();
    }
    await this.props.getPostsByUser(this.props.match.params.index);
  }

  render() {
    const { index } = this.props.match.params;
    const { usuarios } = this.props.usuariosReducer;
    const { publicaciones } = this.props.publicacionesReducer;
    console.log(this.props);

    const {
      loading: loadingPosts,
      error: errorPosts
    } = this.props.publicacionesReducer;

    const {
      loading: loadingUsers,
      error: errorUsers
    } = this.props.usuariosReducer;

    const showUserName = () => {
      if (loadingUsers || loadingPosts || !usuarios.length) {
        return <Spinner></Spinner>;
      } else {
        const { name } = usuarios[index - 1];
        return <h1 className="title is-1 has-text-primary">Posts de {name}</h1>;
      }
    };

    const handleErrorUserName = () => {
      if (errorUsers) {
        return <Fatal message={errorUsers}></Fatal>;
      } else {
        return showUserName();
      }
    };

    const renderPosts = () => {
      const existsPosts = publicaciones.filter(
        usuario => usuario.userId === index
      );

      if (errorPosts) {
        return <Fatal message={errorPosts}></Fatal>;
      } else if (
        existsPosts.length &&
        usuarios.length &&
        publicaciones.length
      ) {
        const { publicacion_key: key } = usuarios[index - 1];
        const loadPosts = publicaciones[key].posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body}></Post>
        ));
        return loadPosts;
      }
    };

    return (
      <>
        {handleErrorUserName()}
        {renderPosts()}
      </>
    );
  }
}

const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => {
  return {
    usuariosReducer,
    publicacionesReducer
  };
};

const mapDispatchToProps = {
  ...usuariosActions,
  ...publicacionesActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
