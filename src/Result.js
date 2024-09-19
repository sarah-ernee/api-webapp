import React from "react";

const Result = ({ data }) => {
  return (
    <div>
      <h2>Response</h2>
      <p>
        <strong>Message:</strong> {data.message}
      </p>
      <p>
        <strong>ID:</strong> {data.data.id}
      </p>
      <p>
        <strong>Title:</strong> {data.data.title}
      </p>
      <p>
        <strong>Description:</strong> {data.data.description}
      </p>
    </div>
  );
};

export default Result;
