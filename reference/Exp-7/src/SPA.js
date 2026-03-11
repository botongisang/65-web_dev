import { useState } from "react";

function SPA() {
  const [page, setPage] = useState("Home");

  return (
    <div>
      <button onClick={() => setPage("Home")}>Home</button>
      <button onClick={() => setPage("About")}>About</button>

      {page === "Home" && <h2>This is Home Page</h2>}
      {page === "About" && <h2>This is About Page</h2>}
    </div>
  );
}

export default SPA;
