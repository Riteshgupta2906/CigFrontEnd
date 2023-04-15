import "./styles.css";

import postImage from "../images/CreativeWriting.svg";
import NewPost from "./newPost";

export default function Blog() {
  return (
    <div className="blog">
      <div className="banner">
        <div className="blogContent">
          <h1 id="Heading">BLOG</h1>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <img className="postImage" src={postImage} alt=""></img>
      </div>
      <div className="selection">
        <button className="button button-3">Hackathon</button>
        <button className="button button-3">Event</button>
        <button className="button button-3">NewsLetter</button>
        <button className="button button-3">CLI</button>
        <button className="button button-3">Industial Trip</button>
      </div>
      <main className="outer">
        <div className="inner">
          <div className="post-feed">
            <NewPost />
            <NewPost />
            <NewPost />
            <NewPost />
            <NewPost />
            <NewPost />
          </div>
        </div>
      </main>
    </div>
  );
}
