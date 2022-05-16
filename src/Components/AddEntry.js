import React, { useState } from "react";
import app from "../firebase";

const AddEntry = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  function onSubmit(e) {
    e.preventDefault();

    app
      .firestore()
      .collection("books")
      .add({
        author,
        title,
        year: parseInt(year),
      })
      .then(() => {
        setAuthor("");
        setTitle("");
        setYear("");
      });
  }

  return (
    <div style={{ justifyContent: "center", marginLeft: "100px" }}>
      {" "}
      <form
        onSubmit={onSubmit}
        style={{ maxWidth: "600px", textAlign: "left" }}
      >
        <h4> Add Book To Your Collection</h4>
        <div>
          <label> Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.currentTarget.value)}
          />
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.currentTarget.value)}
          />
        </div>
        <div>
          <label> Year</label>
          <input
            type="number"
            value={year}
            onChange={(e) => setYear(e.currentTarget.value)}
          />
        </div>
        <br />
        <button
          className="btn btn-dark"
          style={{
            backgroundColor: "green",
            borderColor: "green",
            maxWidth: "150px",
          }}
        >
          Add Book{" "}
        </button>
      </form>
    </div>
  );
};

export default AddEntry;
