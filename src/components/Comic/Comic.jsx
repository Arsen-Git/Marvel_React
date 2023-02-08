import "./Comic.scss";

export default function Comic(props) {
  return (
    <div onClick={props.onSelect} className="comic">
      <img width={225} height={346} src={props.imgUrl} alt="comic" />
      <h2 className="comic__title">{props.title}</h2>
      <p className="comic__price">
        {props.price === 0 ? "Not Available" : props.price + "$"}
      </p>
    </div>
  );
}
