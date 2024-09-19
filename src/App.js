import React, { useState } from "react";
import axios from "axios";

import Result from "./Result";

const App = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState(null);

  const handleCreate = async () => {
    try {
      const res = await axios.post("http://localhost:8000/items", {
        id,
        title,
        description,
      });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGet = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/items/${id}`);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:8000/items/${id}`, {
        title,
        description,
      });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.delete(`http://localhost:8000/items/${id}`);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

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

export default App;
