import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home.jsx";
import Quiz from "./pages/Quiz/quiz.jsx";
import Results from "./pages/Results/results.jsx";
import Navigation from "./pages/Navigation/navigation";

export default function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/results" element={<Results />} />
        </Routes>
      </>
    </Router>
  );
}
