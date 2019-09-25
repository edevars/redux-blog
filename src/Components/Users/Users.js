import React, { Component } from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import Spinner from "../general/Spinner";
import Fatal from "../general/Fatal";
import Table from "./Table";

class App extends Component {
  componentDidMount() {
    // this.fetchUsers();
    this.props.getAll();
  }

  renderTable = () => {
    if (this.props.loading) {
      return <Spinner />;
    }

    if (this.props.error) {
      return <Fatal message={this.props.error} />;
    }

    return <Table />;
  };

  render() {
    return <>{this.renderTable()}</>;
  }
}

const mapStateToProps = reducers => {
  return reducers.usuariosReducer;
};

export default connect(
  mapStateToProps,
  usuariosActions
)(App);
