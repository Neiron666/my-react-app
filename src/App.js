// import React from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
const App = () => {
  const costs = [
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
  //Старый вид кода, когда нужно было импортировать React form React
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Начнем"),
  //   React.createElement(Costs, { costs: costs })
  // );
  const addCostHandler = (cost) => {
    console.log(cost);
    console.log("in app component");
    // costs.append(...cost);
  };
  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
