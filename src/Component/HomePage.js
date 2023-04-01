import "../App.css";

import Home from "./home";
import CardExample from "./corousel";
// import Testimonial from "./Component/testimonial";
import HigherStudiesCarousel from "./HigherStudiesCarousel";
function HomePage() {
  return (
    <div>
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

export default HomePage;
