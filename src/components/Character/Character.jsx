import "./Character.scss";
import "../../global.scss";

export default function Character() {
  return (
    <div className="character">
      <div className="character__head">
        <img width={150} height={150} src="./img/thor.png" alt="character" />
        <div className="character__info">
          <h2 className="character__name">THOR</h2>
          <button className="btn red">HOMEPAGE</button>
          <button className="btn">WIKI</button>
        </div>
      </div>
      <p className="character__text">
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
        the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
        is referred to as the father of Váli in the Prose Edda.
      </p>
      <h3 className="character__title">Comics:</h3>
      <ul className="comics__list">
        <li className="comics">
          Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
        </li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
        <li className="comics">All-Winners Squad: Band of Heroes (2011) #3</li>
      </ul>
    </div>
  );
}
