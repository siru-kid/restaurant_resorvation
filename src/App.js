import React from "react";
import "./App.css";
import Book from "./components/frontend/ReservationForm/book";
import RestorantInfo from "./components/frontend/RestorantInfo";

function App() {
  return (
    <div className="App">
      <RestorantInfo />
      <Book />
    </div>
  );
}

export default App;
