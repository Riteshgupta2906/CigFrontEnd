import "./App.css";
import Navbar from "./Component/header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Component/Footer"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Testimonial from "./Component/testimonial";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
