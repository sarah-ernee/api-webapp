import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";

const App = () => {
  const [id, setId] = useState("");
  const [idRetrieve, setIdRetrieve] = useState("");
  const [idDelete, setIdDelete] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState(null);

  const handleCreate = async () => {
    if (!id || !title || !description) {
      alert("Please fill in all fields for create operation.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/items", {
        id: id,
        title,
        description,
      });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGet = async () => {
    if (!idRetrieve) {
      alert("Please fill in id field for retrieve operation.");
      return;
    }

    try {
      const res = await axios.get(`http://localhost:8000/items/${idRetrieve}`);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async () => {
    if (!id || !title || !description) {
      alert("Please fill in all fields for update operation.");
      return;
    }

    try {
      const res = await axios.put(`http://localhost:8000/items/${id}`, {
        id,
        title,
        description,
      });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    if (!idDelete) {
      alert("Please fill in id field for delete operation.");
      return;
    }
    try {
      const res = await axios.delete(`http://localhost:8000/items/${idDelete}`);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>CRUD Operations</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleCreate} style={{ marginRight: "10px" }}>
          Create
        </button>
        <button onClick={handleUpdate}>Update</button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="ID"
          value={idRetrieve}
          onChange={(e) => setIdRetrieve(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleGet}>Retrieve</button>
      </div>

      <div>
        <input
          type="text"
          placeholder="ID"
          value={idDelete}
          onChange={(e) => setIdDelete(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={handleDelete}>Delete</button>
      </div>

      {response && <Result data={response} />}
    </div>
  );
};

export default App;
