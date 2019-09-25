import React from "react";
import { connect } from "react-redux";
import "@fortawesome/fontawesome-free/css/all.css";
import { Link } from "react-router-dom";

const Table = props => {
  const setUsers = () => {
    return props.usuarios.map((usuario, index) => (
      <>
        <tr key={usuario.id}>
          <td>{usuario.name}</td>
          <td>{usuario.email.toLowerCase()}</td>
          <td>{usuario.website}</td>
          <td>
            <Link to={`/publicaciones/${index}`}>
              <i className="fas fa-eye" />
            </Link>
          </td>
        </tr>
      </>
    ));
  };

  return (
    <>
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
            <th>
              <strong title="Publicaciones">Publicaciones</strong>
            </th>
          </tr>
        </thead>
        <tbody>{setUsers()}</tbody>
      </table>
    </>
  );
};

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps)(Table);
