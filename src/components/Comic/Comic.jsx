import "./Comic.scss";
import { Link } from "react-router-dom";

export default function Comic(props) {
  return (
    <Link to={`/comics/${props.id}`}>
      <div className="comic">
        <img width={225} height={346} src={props.imgUrl} alt="comic" />
        <h2 className="comic__title">{props.title}</h2>
        <p className="comic__price">
          {props.price === 0 ? "Not Available" : props.price + "$"}
        </p>
      </div>
    </Link>
  );
}
