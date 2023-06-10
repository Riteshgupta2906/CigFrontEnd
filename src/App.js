import "./App.css";
import Navbar from "./Component/header";
import { BrowserRouter } from "react-router-dom";

// import Testimonial from "./Component/testimonial";

import HigherStudiesCarousel from "./Component/HigherStudiesCarousel";
import Event from "./Component/events";

function App() {
  return (
    <div className="App">
      {/* <div><Event/></div> */}
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

      <div>
        <Home />
      </div>
     
      <div>
        <HigherStudiesCarousel />
      </div>
      <div>
        <CardExample />
      </div>

    </div>
  );
}

export default App;
