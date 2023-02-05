import "./Random.scss";
import "../../global.scss";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";

import React from "react";
import axios from "axios";

export default function Random(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imgUrl, setImgUrl] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const getRandomItem = async () => {
    setError(false);
    setLoading(true);
    const id = Math.floor(Math.random() * (1009637 - 1009137) + 1009137);
    const res = await axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=3f46bb5575fb9ef6fdaa0d96dec50353`
      )
      .catch((error) => {
        onError();
      });
    randomItemLoaded(res.data.data.results[0]);
  };

  const randomItemLoaded = (item) => {
    setName(item.name);
    setDescription(item.description);
    setImgUrl(item.thumbnail.path + "." + item.thumbnail.extension);
    setLoading(false);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  React.useEffect(() => {
    getRandomItem();
  }, []);

  const errorMessage = error ? <Error /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content =
    !error && !loading ? (
      <View name={name} description={description} imgUrl={imgUrl} />
    ) : null;

  return (
    <section className="random">
      <div className="random__left">
        {errorMessage}
        {spinner}
        {content}
      </div>
      <div className="random__right">
        <h2 className="random__title">
          Random character for today!
          <br /> Do you want to get to know him better?
        </h2>
        <h2 className="random__subtitle">Or choose another one</h2>
        <button onClick={getRandomItem} className="btn red">
          TRY IT
        </button>
        <img
          width={203}
          height={189}
          className="random__decoration"
          src="./img/random-decoration.png"
          alt="decoration"
        />
      </div>
    </section>
  );
}

const View = (props) => {
  return (
    <>
      <img width={180} height={180} src={props.imgUrl} alt="character" />
      <div className="character__info">
        <h2 className="character__name">{props.name}</h2>
        <p className="random__character__text">
          {props.description
            ? props.description
            : "No description for this character"}
        </p>
        <div className="character__btnsGroup">
          <button className="btn red">HOMEPAGE</button>
          <button className="btn">WIKI</button>
        </div>
      </div>
    </>
  );
};
