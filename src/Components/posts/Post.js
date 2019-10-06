import React from "react";

const Post = props => {
  return (
    <div className="box" onClick={() => props.handleOpen(props.id, props.userId)}>
      <article className="media">
        <div className="media-left">
          <figure className="image ">
            <img
              src="https://source.unsplash.com/user/erondu/200x200"
              alt="pic"
            />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <h3 className="title is-3">{props.title}</h3>
            <p>{props.body}</p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a href="" className="level-item" aria-label="reply">
                <span className="icon is-small">
                  <i className="fas fa-reply" aria-hidden="true"></i>
                </span>
              </a>
              <a href="" className="level-item" aria-label="retweet">
                <span className="icon is-small">
                  <i className="fas fa-retweet" aria-hidden="true"></i>
                </span>
              </a>
              <a href="" className="level-item" aria-label="like">
                <span className="icon is-small">
                  <i className="fas fa-heart" aria-hidden="true"></i>
                </span>
              </a>
            </div>
          </nav>
          {props.open ? <p>Esta abierto</p> : <p>Esta cerrado</p>}
        </div>
      </article>
    </div>
  );
};

export default Post;
