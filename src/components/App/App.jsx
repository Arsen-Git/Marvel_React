import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";

const CharactersPage = lazy(() => import("../../pages/Characters"));
const ComicsPage = lazy(() => import("../../pages/Comics"));
const SingleComicPage = lazy(() => import("../../pages/SingleComicPage"));

export default function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route exact path="/" element={<CharactersPage />} />
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/comics/:comicId" element={<SingleComicPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
