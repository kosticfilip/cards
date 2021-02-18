import React from "react";
import Card from "components/shared/card/index";
import CardAdd from "components/shared/card/add-new";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const Cards = props => {
  const { cards } = props.cards;

  return (
    <div className="container">
      <h4>My cards</h4>
      <div className="cards-container">
        {cards.map(card => (
          <Link to={`/cards/${card.id}/edit`}>
            <Card
              name={card.name}
              number={card.number}
              expires={card.expires}
            ></Card>
          </Link>
        ))}

        <Link to="/cards/add">
          <CardAdd></CardAdd>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cards: state.cards
  };
};

export default connect(
  mapStateToProps,
  {}
)(Cards);
