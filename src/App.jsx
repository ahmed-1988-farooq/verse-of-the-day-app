import React from "react";
import RandomVerse from "./components/RandomVerse";
import SpecificVerse from "./components/SpecificVerse";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Bible Verse App</h1>
      <RandomVerse />
      <SpecificVerse />
    </div>
  );
}
