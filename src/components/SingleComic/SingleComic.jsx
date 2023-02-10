import "./SingleComic.scss";

import { Link } from "react-router-dom";

export default function SingleComic({
  imgUrl,
  title,
  description,
  pages,
  price,
}) {
  return (
    <>
      <div className="comic__content">
        <img width={293} height={450} src={imgUrl} alt="comic" />
        <div className="comic__info">
          <h2 className="comic__info__title">{title}</h2>
          <p className="comic__info__text">
            {description ? description : "No description for this comic"}
          </p>
          <p className="comic__info__text">{pages} pages</p>
          <p className="comic__info__price">
            {price == 0 ? "Not Available" : price + "$"}
          </p>
        </div>
      </div>
      <Link className="comic__link" to={"/comics"}>
        Back to all
      </Link>
    </>
  );
}
