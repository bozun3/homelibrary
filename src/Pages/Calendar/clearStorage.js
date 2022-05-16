import React from "react";

export default function clearStorage() {
  localStorage.clear();
  return (
    <div>
      <button style={{ background: "black" }}>Clear Storage</button>
    </div>
  );
}
