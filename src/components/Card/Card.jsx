import "./Card.scss";

export default function Card(props) {
  return (
    <div className="card">
      <img width={200} height={200} src={props.imgUrl} alt="character" />
      <h2 className="card__title">{props.name}</h2>
    </div>
  );
}
