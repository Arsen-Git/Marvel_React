import "./App.scss";

import Header from "../Header/Header";
import Random from "../Random/Random";
import CardList from "../CardList/CardList";
import Character from "../Character/Character";

import React from "react";

export default function App() {
  const [selectedItem, setSelectedItem] = React.useState({});

  const onSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <Header />
      <Random />
      <section className="characters">
        <CardList onSelectItem={onSelectItem} />
        <Character item={selectedItem} />
      </section>
    </>
  );
}
