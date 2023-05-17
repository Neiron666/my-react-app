// import React from "react";
import Costs from "./components/Costs/Costs";
const App = () => {
  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2021, 11, 25),
      description: "MackBook",
      amount: 1252,
    },
    {
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
  return (
    <div className="App">
      <h1>Начнем</h1>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
