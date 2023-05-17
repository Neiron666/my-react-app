import "./CostItem.css";
import "./CostDate";
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = (props) => {
  let description = props.description;

  const chnageDescriptionHandler = () => {
    description = "new text";
    console.log(description);
  };
  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{description} </h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
      <button onClick={chnageDescriptionHandler}>Изменить описание</button>
    </Card>
  );
};
export default CostItem;
