
import React from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom"
import Aboutus from "./components/Aboutus";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/aboutus" element={<Aboutus/>}></Route>
      </Routes>
    </div>
  )
}

export default App;