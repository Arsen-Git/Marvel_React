import "./Character.scss";
import "../../global.scss";
import React, { Component } from "react";
import Skeleton from "../Skeleton/Skeleton";

export default class Character extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      imgUrl: "",
      comics: [],
      skeleton: true,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      this.setState({
        name: this.props.item.name,
        description: this.props.item.description,
        imgUrl:
          this.props.item.thumbnail.path +
          "." +
          this.props.item.thumbnail.extension,
        comics: this.props.item.comics.items,
        skeleton: false,
      });
    }
  }

  render() {
    return (
      <div className="character">
        {this.state.skeleton ? (
          <Skeleton />
        ) : (
          <View
            name={this.state.name}
            description={this.state.description}
            imgUrl={this.state.imgUrl}
            comics={this.state.comics}
          />
        )}
      </div>
    );
  }
}

const View = ({ name, description, imgUrl, comics }) => {
  return (
    <>
      <div className="character__head">
        <img width={150} height={150} src={imgUrl} alt="character" />
        <div className="character__info">
          <h2 className="character__name">{name}</h2>
          <button className="btn red">HOMEPAGE</button>
          <button className="btn">WIKI</button>
        </div>
      </div>
      <p className="character__text">
        {description
          ? description
          : "There is no description for this character"}
      </p>
      <h3 className="character__title">Comics:</h3>
      <ul className="comics__list">
        {comics.length > 0 ? null : (
          <p>There are no comics for this character</p>
        )}
        {comics.map((item, id) => (
          <li key={id} className="comics">
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};
