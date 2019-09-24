import React, { Component } from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";

class App extends Component {
  componentDidMount() {
    // this.fetchUsers();
    this.props.getAll();
  }

  renderUsers = () =>
    this.props.usuarios.map(usuario => (
      <tr key={usuario.id}>
        <td>{usuario.name}</td>
        <td>{usuario.email.toLowerCase()}</td>
        <td>{usuario.website}</td>
      </tr>
    ));

  render() {
    return (
      <div className="container section">
        <h1 className="title">Usuarios</h1>
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr className="is-selected">
              <th>
                <strong title="Usuario">Usuario</strong>
              </th>
              <th>
                <strong title="E-mail">E-mail</strong>
              </th>
              <th>
                <strong title="Website">Website</strong>
              </th>
            </tr>
          </thead>
          <tbody>{this.renderUsers()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
)(App);
