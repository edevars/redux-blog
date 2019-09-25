import React, { Component } from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import * as publicacionesActions from "../../actions/publicacionesActions";

class Posts extends Component {
  componentDidMount() {
    if (!this.props.usuariosReducer.usuarios.length) {
      this.props.getAllUsers();
    }
    this.props.getAllPosts();
  }

  render() {
    const { index } = this.props.match.params;
    console.log(this.props);
    return <h1 className="title">Publicacion del usuario {index}</h1>;
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
