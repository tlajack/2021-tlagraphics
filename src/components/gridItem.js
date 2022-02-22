import React from "react";

const GridItem = ({ id, itemClass, children }) => (
  <div className={`grid_items ${itemClass}`}>
    <div id={id} className="items">
      {children}
    </div>
  </div>
);

export default GridItem;
