import React, { Component } from "react";

class Posts extends Component {
  state = {};
  render() {
    return <h1 className="title">Publicacion del usuario {this.props.match.params.index}</h1>;
  }
}

export default Posts;
