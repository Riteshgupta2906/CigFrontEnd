import "../App.css";
import "./Homepage.css";
import Home from "./home";
import CardExample from "./Corousel/corousel";
// import Testimonial from "./Component/testimonial";
import HigherStudiesCarousel from "./HigherStudiesCarousel";
function HomePage() {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div id="featuredworks">
        <CardExample />
      </div>
      <div>
        <HigherStudiesCarousel />
      </div>
    </div>
  );
}

export default HomePage;
