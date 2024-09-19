import React, { useState, useEffect } from "react";

const BASE_URL = "http://localhost:8000";

const App = () => {
  return (
    <div>
      <h1>CRUD Operations</h1>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={handleCreate}>Create</button>
        <button onClick={handleGet}>Get</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      {response && <Result data={response} />}
    </div>
  );
};
