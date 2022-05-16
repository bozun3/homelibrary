import React, { useState, useEffect } from "react";
import { ReactComponent as Trash } from "../assets/trash.svg";
import app from "../firebase";

const SORT_OPTIONS = {
  YEAR_ASC: { column: "year", direction: "desc" },
  YEAR_DESC: { column: "year", direction: "asc" },

  TITLE_ASC: { column: "title", direction: "desc" },
  TITLE_DESC: { column: "title", direction: "asc" },
};

function useBooks(sortBy = "YEAR_ASC") {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const unsubscribe = app
      .firestore()
      .collection("books")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newBooks = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setBooks(newBooks);
      });

    return () => unsubscribe();
  }, [sortBy]);

  return books;
}
export default function BookList() {
  const [sortBy, setSortBy] = useState("YEAR_ASC");
  const books = useBooks(sortBy);

  const deleteBook = (book) => {
    app.firestore().collection("books").doc(book.id).delete();
  };
  return (
    <>
      <div style={{ marginLeft: "100px" }}>
        <h2> Book List</h2>
        <div>
          <label> Sort By:</label>
          <br />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.currentTarget.value)}
          >
            <option value="YEAR_ASC">Year(newest first)</option>
            <option value="YEAR_DESC">Year(oldest first)</option>
            <option value="TITLE_ASC"> Title(a-z)</option>
            <option value="TITLE_DESC"> Title(z-a)</option>
          </select>
        </div>
        <ol>
          {books.map((book) => (
            <li style={{ fontWeight: "bold" }} key={book.id}>
              <hr />
              <div className="book-entry">
                {book.author} - {book.title}
                <code className="year"> Year: {book.year}</code>
              </div>
              <div
                className="delete-book"
                onClick={() => deleteBook(book)}
                style={{ display: "flex", maxWidth: "25px" }}
              >
                {
                  <span>
                    {}
                    <Trash />
                  </span>
                }
              </div>
            </li>
          ))}
        </ol>
      </div>
      <br />
    </>
  );
}
