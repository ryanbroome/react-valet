import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>404 No Page</h1>
      <p>Try again, that page does not yet exist on this site</p>
      <div
        className="spinner-border text-danger"
        role="status">
        <span className="visually-hidden"></span>
      </div>
    </div>
  );
};

export default NotFound;
