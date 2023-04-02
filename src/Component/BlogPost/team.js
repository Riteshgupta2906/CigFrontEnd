import { useState } from "react";
import "./styles.css";

export default function Blog() {
  const [data1, setData1] = useState(["webd1", "webd2", "webd3"]);
  const map1 = new Map();
  map1.set("webd", 3);
  map1.set("event", 3);
  map1.set("content", 3);
  map1.set("design", 3);

  const handleClick = (event) => {
    let eve = event.target.name;
    const times = map1.get(eve);
    let data2 = [];
    for (let i = 1; i <= times; i++) {
      data2.push(eve + i);
    }
    setData1(data2);
  };
  return (
    <div>
      <button onClick={handleClick} name="webd">
        Web Development
      </button>
      <button onClick={handleClick} name="event">
        {" "}
        Events
      </button>
      <button onClick={handleClick} name="design">
        Design
      </button>
      <button onClick={handleClick} name="content">
        Content
      </button>
      {data1.map((ele) => (
        <img
          alt=""
          src={process.env.PUBLIC_URL + "/images/" + ele + ".png"}
        ></img>
      ))}
    </div>
  );
}
