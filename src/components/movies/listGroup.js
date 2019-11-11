import React from "react";

const ListGroup = ({
  items,
  onItemSelect,
  valueProperty,
  textProperty,
  selectedItem
}) => {
  return (
    <div className="genres">
      {items.map(item => (
        <ul key={item[textProperty]}>
          <li
            className={item === selectedItem ? "active" : ""}
            onClick={() => onItemSelect(item)}
          >
            {item[valueProperty]}
          </li>
        </ul>
      ))}
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "_id",
  valueProperty: "name"
};

export default ListGroup;
