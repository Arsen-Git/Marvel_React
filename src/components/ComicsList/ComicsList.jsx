import "./ComicsList.scss";
import Comic from "../Comic/Comic";
import axios from "axios";
import React from "react";
import Spinner from "../Spinner/Spinner";

export default function ComicsList() {
  const [items, setItems] = React.useState([]);
  const [offset, setOffset] = React.useState(360);
  const [loading, setLoading] = React.useState(false);
  const [newLoading, setNewLoading] = React.useState(false);

  const getAllitems = async () => {
    setNewLoading(true);
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/comics?limit=8&offset=${offset}&apikey=3f46bb5575fb9ef6fdaa0d96dec50353`
    );
    allItemLoaded(res.data.data.results);
  };

  const allItemLoaded = (newItems) => {
    setItems([...items, ...newItems]);
    setOffset(offset + 8);
    setLoading(false);
    setNewLoading(false);
  };

  const onSelectItem = async (id) => {
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=3f46bb5575fb9ef6fdaa0d96dec50353`
    );
  };

  React.useEffect(() => {
    setLoading(true);
    getAllitems();
  }, []);

  return (
    <ul className="comics__container">
      {loading ? (
        <Spinner />
      ) : (
        <View
          items={items}
          onSelectItem={onSelectItem}
          getAllitems={getAllitems}
          newLoading={newLoading}
        />
      )}
    </ul>
  );
}

const View = (props) => {
  return (
    <>
      {props.items.map((item) => (
        <Comic
          key={item.id}
          imgUrl={item.thumbnail.path + "." + item.thumbnail.extension}
          title={item.title}
          price={item.prices[0].price}
          onSelect={() => props.onSelectItem(item.id)}
        />
      ))}
      {props.newLoading ? (
        <Spinner />
      ) : (
        <button onClick={props.getAllitems} className="btn red long">
          LOAD MORE
        </button>
      )}
    </>
  );
};
