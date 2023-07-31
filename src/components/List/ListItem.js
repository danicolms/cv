import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

ListItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    category: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

function ListItem({ item }) {
  return (
    <a className="list__item" target="_blank" href={item.url}>
      <i className="list__icon">{item.icon}</i>
      <div className="list__text-container">
        <p className="text-container__caption"> {item.category} </p>
        <span className="text-container__value"> {item.value}</span>
      </div>
    </a>
  );
}

export default ListItem;
