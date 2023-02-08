import Random from "../components/Random/Random";
import CardList from "../components//CardList/CardList";
import Character from "../components//Character/Character";

import "../components/App/App.scss";
import { useState } from "react";

export default function CharactersPage() {
  const [selectedItem, setSelectedItem] = useState({});

  const onSelectItem = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <Random />
      <section className="characters">
        <CardList onSelectItem={onSelectItem} />
        <Character item={selectedItem} />
      </section>
    </>
  );
}
