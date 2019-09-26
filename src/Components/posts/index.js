import React, { Component } from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import * as publicacionesActions from "../../actions/publicacionesActions";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";

class Posts extends Component {
  async componentDidMount() {
    if (!this.props.usuariosReducer.usuarios.length) {
      await this.props.getAllUsers();
    }
    await this.props.getPostsByUser(this.props.match.params.index);
  }

  render() {
    const { index } = this.props.match.params;
    console.log(this.props);

    const {
      loading: loadingPosts,
      error: errorPosts
    } = this.props.publicacionesReducer;

    const {
      loading: loadingUsers,
      error: errorUsers
    } = this.props.usuariosReducer;

    const showContent = () => {
      if (loadingUsers || loadingPosts) {
        return <Spinner></Spinner>;
      } else {
        return <h1 className="title">Publicacion del usuario {index}</h1>;
      }
    };

    const handleErrorWithContent = () => {
      if (errorUsers) {
        return <Fatal message={errorUsers}></Fatal>;
      } else if (errorPosts) {
        return <Fatal message={errorPosts}></Fatal>;
      } else {
        return showContent();
      }
    };

    return <>{handleErrorWithContent()}</>;
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
