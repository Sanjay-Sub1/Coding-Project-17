import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./Gallery";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
