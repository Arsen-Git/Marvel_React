import Banner from "../components/Banner/Banner";
import Spinner from "../components/Spinner/Spinner";
import SingleComic from "../components/SingleComic/SingleComic";

import "./SingleComicPage.scss";

import { useParams } from "react-router-dom";
import React from "react";
import axios from "axios";

export default function SingleComicPage() {
  const { comicId } = useParams();
  const [comic, setComic] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const onComicLoaded = (item) => {
    setComic(item);
    setLoading(false);
  };

  const onComicLoad = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/comics/${comicId}?apikey=3f46bb5575fb9ef6fdaa0d96dec50353`
    );
    onComicLoaded(res.data.data.results);
  };

  React.useEffect(() => {
    onComicLoad();
  }, [comicId]);

  return (
    <>
      <Banner />
      <div className="comic__container">
        {loading ? <Spinner /> : <View data={comic} />}
      </div>
    </>
  );
}

const View = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <SingleComic
          key={item.id}
          imgUrl={item.thumbnail.path + "." + item.thumbnail.extension}
          title={item.title}
          description={item.description}
          pages={item.pageCount}
          price={item.prices[0].price}
        />
      ))}
    </>
  );
};
