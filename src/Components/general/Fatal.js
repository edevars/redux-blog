import React, { useState } from "react";

const Fatal = props => {
  const [state, setState] = useState({ open: true });

  const handleClick = () => setState({ open: false });

  return (
    <article
      className="message is-danger is-medium"
      style={state.open ? { display: "block" } : { display: "none" }}
    >
      <div className="message-header">
        <p>Error</p>
        <button
          onClick={handleClick}
          className="delete"
          aria-label="delete"
        ></button>
      </div>
      <div className="message-body">{props.message}</div>
    </article>
  );
};

export default Fatal;
