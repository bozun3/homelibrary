import React, { useState, useEffect } from "react";
import AddEntry from "../../Components/AddEntry";
import BookList from "../../Components/BookList";

import "../Home/MainPage.css";

export default function MainPage() {
  return (
    <div>
      <AddEntry />
      <hr />
      <BookList />
    </div>
  );
}
