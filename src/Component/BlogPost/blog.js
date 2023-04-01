import "./styles.css";
import Post from "./post";

export default function Blog() {
  return (
    <div className="blog">
      <div className="banner">
        <h1>banner</h1>
      </div>
      <div className="selection">
        <button className="btn">Hackathon</button>
        <button className="btn">Event</button>
        <button className="btn">NewsLetter</button>
        <button className="btn">CLI</button>
        <button className="btn">Industial Trip</button>
      </div>
      <div className="AppPost">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>

      <div className="footer">
        <h1>footer</h1>
      </div>
    </div>
  );
}
