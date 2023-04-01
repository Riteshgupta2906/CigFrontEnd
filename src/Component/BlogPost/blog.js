import "./styles.css";
import Post from "./post";

export default function Blog() {
  return (
    <div className="blog">
      <div className="banner">
        <h1>banner</h1>
      </div>
      <div className="selection">
        <button className="button button-3">Hackathon</button>
        <button className="button button-3">Event</button>
        <button className="button button-3">NewsLetter</button>
        <button className="button button-3">CLI</button>
        <button className="button button-3">Industial Trip</button>
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
