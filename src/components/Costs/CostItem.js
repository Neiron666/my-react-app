import "./CostItem.css";
import "./CostDate";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import { useEffect } from "react";

const CostItem = (props) => {
  return (
    <li>
      <Card className="cost-item">
        <CostDate date={props.date} />
        <div className="cost-item__description">
          <h2>{props.description} </h2>
          <div className="cost-item__price">${props.amount}</div>
        </div>
        <div>
          <button
            type="button"
            className="cost-item__price cursor button"
            style={{ fontSize: "0.7rem" }}
            onClick={() => props.onremoveCostHandler(props.itemId)}
          >
            Remove Item
          </button>
        </div>
      </Card>
    </li>
  );
};
export default CostItem;
