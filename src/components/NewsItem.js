import React from "react";
function NewsItem(props) {
  const { title, description, imgUrl, newsUrl, author, time, source } = props;
  return (
    <div className="card my-3">
      <span
        className="position-absolute top-0 translate-middle badge bg-danger"
        style={{ left: "20%", zIndex: "1" }}
      >
        {source}
      </span>
      <img
        src={imgUrl}
        className="card-img-top"
        alt="..."
        style={{ height: "160px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">
            By {author} on {new Date(time).toGMTString()}
          </small>
        </p>

        <a
          href={newsUrl}
          rel="noreferrer"
          target="_blank"
          className="btn btn-primary"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
