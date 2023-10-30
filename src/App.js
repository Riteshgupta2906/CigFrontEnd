import "./App.css";
import Navbar from "./Component/header";
import { BrowserRouter } from "react-router-dom";
import React from "react";
// import Testimonial from "./Component/testimonial";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
