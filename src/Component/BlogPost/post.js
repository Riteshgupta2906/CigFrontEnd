import Model from "./Model";
import "./styles.css";
export default function Post() {
  return (
    <div className="post">
      <div className="img">
        <img alt=""></img>
      </div>
      <div className="content">
        <div className="heading">Recession </div>
        <div className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </div>
      </div>
      <Model />
    </div>
  );
}
