import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: []
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let data = await response.json();
    this.setState({ usuarios: data });
  };

  renderUsers = () => this.state.usuarios.map((usuario) => (
    <tr key={usuario.id}>
      <td>
        {usuario.name}
      </td>
      <td>
        {usuario.email.toLowerCase()}
      </td>
      <td>
        {usuario.website}
      </td>
    </tr>
  ));

  render() {
    return (
      <div className="container section">
        <h1 className="title">Usuarios</h1>
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr className="is-selected">
              <th><strong title="Usuario">Usuario</strong></th>
              <th><strong title="E-mail">E-mail</strong></th>
              <th><strong title="Website">Website</strong></th>
            </tr>
          </thead>
          <tbody>
            {this.renderUsers()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
