import React, { Component } from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

class Posts extends Component {
  componentDidMount() {
    if (!this.props.usuarios.length) {
      this.props.getAll();
    }
  }

  render() {
    const { index } = this.props.match.params;
    return (
      <h1 className="title">
        Publicacion del usuario {index}
      </h1>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
)(Posts);
