import "./CardList.scss";
import Card from "../Card/Card";
import axios from "axios";
import React from "react";
import Spinner from "../Spinner/Spinner";

export default function CardList(props) {
  const [items, setItems] = React.useState([]);
  const [offset, setOffset] = React.useState(360);
  const [loading, setLoading] = React.useState(false);

  const getAllitems = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset}&apikey=3f46bb5575fb9ef6fdaa0d96dec50353`
    );
    allItemLoaded(res.data.data.results);
  };

  const allItemLoaded = (newItems) => {
    setItems([...items, ...newItems]);
    setOffset(offset + 9);
    setLoading(false);
  };

  const onSelectItem = async (id) => {
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=3f46bb5575fb9ef6fdaa0d96dec50353`
    );
    props.onSelectItem(res.data.data.results[0]);
  };

  React.useEffect(() => {
    getAllitems();
  }, []);

  return (
    <ul className="card__container">
      {loading ? (
        <Spinner />
      ) : (
        <View
          items={items}
          onSelectItem={onSelectItem}
          getAllitems={getAllitems}
        />
      )}
    </ul>
  );
}

const View = (props) => {
  return (
    <>
      {props.items.map((item) => (
        <Card
          key={item.id}
          imgUrl={item.thumbnail.path + "." + item.thumbnail.extension}
          name={item.name}
          onSelect={() => props.onSelectItem(item.id)}
        />
      ))}
      <button onClick={props.getAllitems} className="btn red long">
        LOAD MORE
      </button>
    </>
  );
};
