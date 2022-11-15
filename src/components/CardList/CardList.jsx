import "./CardList.scss";
import Card from "../Card/Card";

export default function CardList({ items }) {
  return (
    <ul className="card__container">
      {items.map((item) => (
        <Card
          key={item.id}
          imgUrl={item.thumbnail.path + "." + item.thumbnail.extension}
          name={item.name}
        />
      ))}
      <button className="btn red long">LOAD MORE</button>
    </ul>
  );
}
