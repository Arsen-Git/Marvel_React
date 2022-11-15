import "./App.scss";

import Header from "../Header/Header";
import Random from "../Random/Random";
import { API } from "../../API";

import axios from "axios";
import React from "react";
import CardList from "../CardList/CardList";
import Character from "../Character/Character";

export default function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const getAllitems = async () => {
      const res = await axios.get(API.allItems);
      return res;
    };
    getAllitems().then((res) => setItems(res.data.data.results));
  }, []);

  return (
    <>
      <Header />
      <Random />
      <section className="characters">
        <CardList items={items} />
        <Character />
      </section>
    </>
  );
}
