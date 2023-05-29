import React, { useEffect, useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2021, 11, 25),
    description: "MackBook",
    amount: 1252,
  },
  {
    id: "c3",
    date: new Date(2021, 4, 1),
    description: "Джинсы",
    amount: 49.99,
  },
];
const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  //Старый вид кода, когда нужно было импортировать React form React
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Начнем"),
  //   React.createElement(Costs, { costs: costs })
  // );
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  const removeCostHandler = (removeCost) => {
    setCosts((prevCosts) => {
      return [...prevCosts.filter((item) => item.id !== removeCost)];
    });
  };
  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} onremoveCostHandler={removeCostHandler} />
    </div>
  );
};

export default App;
