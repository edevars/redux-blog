import React from "react";

const Comment = props => {
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image ">
            <img
              src="https://icon-library.net/images/generic-user-icon/generic-user-icon-19.jpg"
              alt="pic"
              style={{
                maxWidth: "50px",
                maxHeight: "50px"
              }}
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <h5 className="title is-5 ">{props.name}</h5>
            <h6 className="title is-6 has-text-primary">{props.email}</h6>
            <p>{props.body}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Comment;
