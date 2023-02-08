import Header from "../Header/Header";
import CharactersPage from "../../pages/Characters";
import ComicsPage from "../../pages/Comics";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<CharactersPage />} />
        <Route path="/comics" element={<ComicsPage />} />
      </Routes>
    </Router>
  );
}
