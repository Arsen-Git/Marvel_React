import "./Random.scss";
import "../../global.scss";

export default function Random() {
  return (
    <section className="random">
      <div className="random__left">
        <img src="./img/thor.png" alt="character" />
        <div className="character__info">
          <h2 className="character__name">Thor</h2>
          <p className="character__text">
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate...
          </p>
          <div className="character__btnsGroup">
            <button className="btn red">HOMEPAGE</button>
            <button className="btn">WIKI</button>
          </div>
        </div>
      </div>
      <div className="random__right">
        <h2 className="random__title">
          Random character for today!
          <br /> Do you want to get to know him better?
        </h2>
        <h2 className="random__subtitle">Or choose another one</h2>
        <button className="btn red">TRY IT</button>
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
