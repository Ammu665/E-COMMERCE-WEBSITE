import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
