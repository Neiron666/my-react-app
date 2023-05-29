import React, { useState } from "react";

const RemoveCostButton = (props) => {
  const [costs, setCosts] = useState(props.costs);
  const removeCostHandler = (removeCost) => {
    console.log(removeCost);
    setCosts((prevCosts) => {
      return [...prevCosts.filter((item) => item.id !== removeCost)];
    });
  };
  return (
    <div>
      <button
        type="button"
        className="cost-item__price cursor button"
        style={{ fontSize: "0.7rem" }}
        onClick={() => removeCostHandler(props.itemId)}
      >
        Remove Item
      </button>
    </div>
  );
};

export default RemoveCostButton;
